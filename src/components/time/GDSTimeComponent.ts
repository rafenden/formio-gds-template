import {Components} from 'formiojs';
import * as moment from 'moment';

const Field = Components.components.field;
const Time = Components.components.time;

export default class GDSTimeComponent extends Time {
    private static MAX_LENGTH = 2;

    private refs: any;
    private component: any;
    private loadRefs: any;
    private checkComponentValidity: any;
    private updateValue: any;

    public attach(element) {
        this.loadRefs(element, {
            hour: 'single',
            minute: 'single',
        });

        this.addEventListener(this.refs.hour, 'input', () => {
            this.checkAndValidateHour();
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {modified: true});
        });

        this.addEventListener(this.refs.minute, 'input', () => {
            this.checkAndValidateMinutes();
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {modified: true});
        });

        this.addEventListener(this.refs.hour, 'keypress', (evt) => {
            this.preventNonNumericKeyPress(evt);
        });

        this.addEventListener(this.refs.minute, 'keypress', (evt) => {
            this.preventNonNumericKeyPress(evt);
        });
        return super.attach(element);
    }

    // @ts-ignore
    public addInputError(message: any, dirty: boolean, element: any): void {
        // @ts-ignore
        super.addInputError(message, dirty, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.addInputError(message, dirty, element);
    }

    public removeInputError(elements) {
        // @ts-ignore
        super.removeInputError([this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.removeInputError(elements);
    }

    public getValue() {
        if (!this.refs.hour.value || !this.refs.minute.value) {
            return '';
        }
        const value = `${this.refs.hour.value}:${this.refs.minute.value}`;
        return moment(value, this.component.format).format(this.component.dataFormat);
    }

    public setValue(value: any, flags: any) {

        if (this.refs.hour && this.refs.minute && value) {
            const parts = value.split(':');
            this.refs.hour.value = parts[0];
            this.refs.minute.value = parts[1];
            return true;
        }
        return false;
    }

    public render() {
        return Field.prototype.render.call(this, this.renderTemplate('time', {
            hour: super.getValue().split(':')[0],
            minute: super.getValue().split(':')[1],
        }));
    }

    private preventNonNumericKeyPress(evt: any) {
        if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    }

    private checkAndValidateHour(): void {

        if (this.refs.hour.value) {
            if (this.refs.hour.value.length > GDSTimeComponent.MAX_LENGTH) {
                this.refs.hour.value = this.refs.hour.value.slice(0, 2);
            }

            const hourAsNumber = parseInt(this.refs.hour.value, 10);
            if (hourAsNumber > 23) {
                this.refs.hour.value = '23';
            }
            if (hourAsNumber < 0) {
                this.refs.hour.value = '00';
            }
        }
    }

    private checkAndValidateMinutes(): void {
        if (this.refs.minute.value) {
            if (this.refs.minute.value.length > GDSTimeComponent.MAX_LENGTH) {
                this.refs.minute.value = this.refs.minute.value.slice(0, 2);
            }
            const minuteAsNumber = parseInt(this.refs.minute.value, 10);
            if (minuteAsNumber > 59) {
                this.refs.minute.value = '59';
            }
            if (minuteAsNumber < 0) {
                this.refs.minute.value = '00';
            }
        }
    }
}
