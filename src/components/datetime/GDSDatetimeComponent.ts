import {Components, Utils} from 'formiojs';
import FormioUtils from 'formiojs/utils';
import * as _ from 'lodash';
import * as moment from 'moment';
import boolValue = Utils.boolValue;

const Field = Components.components.field;
const Day = Components.components.day;

export default class GDSDatetimeComponent extends Day {

    get defaultValue() {

        let defaultValue = this.component.defaultValue;
        if (!defaultValue && this.component.defaultDate) {
            defaultValue = FormioUtils.getDateSetting(this.component.defaultDate);
            defaultValue = defaultValue ? moment(defaultValue).format() : '';
        }
        return defaultValue;
    }

    get emptyValue() {
        return null;
    }

    get parts() {
        return {
            day: this.getFieldValue('day'),
            month: this.getFieldValue('month'),
            year: this.getFieldValue('year'),
            hour: this.getFieldValue('hour'),
            minute: this.getFieldValue('minute'),
        };
    }

    private refs: any;
    private component: any;
    private updateValue: any;
    private renderField: any;
    private inputDefinition: any;
    private checkComponentValidity: any;

    public attach(element: any) {
        this.loadRefs(element, {hour: 'single', minute: 'single'});
        this.addEventListener(this.refs.hour, 'input', () => {
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {
                modified: true,
            });
        });

        this.addEventListener(this.refs.minute, 'input', () => {
            this.setPristine(false);
            this.checkComponentValidity(this.data, true);
            this.updateValue(null, {
                modified: true,
            });
        });

        this.addEventListener(this.refs.hour, 'keypress', (evt) => {
            this.preventNonNumericKeyPress(evt);
        });
        this.addEventListener(this.refs.minute, 'keypress', (evt) => {
            this.preventNonNumericKeyPress(evt);
        });
        return super.attach(element);
    }

    public init() {
        super.init();
        this.validators = this.validators.filter((v) => v !== 'day').concat(['date']);

        this.component.suffix = null;

        this.component.fields.day.required = this.component.validate.required;
        this.component.fields.month.required = this.component.validate.required;
        this.component.fields.year.required = this.component.validate.required;
        this.component.fields.hour = {
            type: 'number', placeholder: 'HH',
            required: this.component.validate.required,
        };
        this.component.fields.minute = {
            type: 'number', placeholder: 'MM',
            required: this.component.validate.required,
        };
    }

    // @ts-ignore
    public addInputError(message, dirty, elements) {
        // @ts-ignore
        super.addInputError(message, dirty, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.addInputError(message, dirty, elements);
    }

    public removeInputError(elements) {
        // @ts-ignore
        super.removeInputError([this.refs.hour, this.refs.minute]);
        // @ts-ignore
        super.removeInputError(elements);
    }

    public render() {

        return Field.prototype.render.call(this, this.renderTemplate('datetime', {
            component: this.component,
            day: this.renderField('day'),
            month: this.renderTemplate('input', {
                input: this.inputDefinition('month'),
            }),

            year: this.renderField('year'),
            hour: this.renderField('hour'),
            minute: this.renderField('minute'),
        }));
    }

    public getDate(value) {
        const defaults = [];
        let day;
        let month;
        let year;
        let hour;
        let minute;
        const [DAY, MONTH, YEAR, HOUR, MINUTE] = [0, 1, 2, 3, 4];
        const defaultValue = value || this.component.defaultValue;

        if (defaultValue) {
            try {
                const defaultDate = moment(defaultValue);
                defaults[DAY] = defaultDate.format('DD');
                defaults[MONTH] = defaultDate.format('MM');
                defaults[YEAR] = defaultDate.format('YYYY');
                defaults[HOUR] = defaultDate.format('HH');
                defaults[MINUTE] = defaultDate.format('mm');
            } catch (e) {
                // ignored
            }
        }

        day = this.refs.day ? parseInt(this.refs.day.value, 10)  : undefined;
        if (day === undefined || _.isNaN(day)) {
            day = defaults[DAY] && !_.isNaN(defaults[DAY]) ? defaults[DAY] : 0;
        }

        month = this.refs.month ? parseInt(this.refs.month.value, 10) : undefined;
        if (month === undefined || _.isNaN(month)) {
            month = defaults[MONTH] && !_.isNaN(defaults[MONTH]) ? defaults[MONTH] : 0;
        }

        year = this.refs.year ? parseInt(this.refs.year.value, 10) : undefined;
        if (year === undefined || _.isNaN(year)) {
            year = defaults[YEAR] && !_.isNaN(defaults[YEAR]) ? defaults[YEAR] : 0;
        }

        hour = this.refs.hour ? parseInt(this.refs.hour.value, 10) : undefined;
        if (hour === undefined || _.isNaN(hour)) {
            hour = defaults[HOUR] && !_.isNaN(defaults[HOUR]) ? defaults[HOUR] : 0;
        }

        minute = this.refs.minute ? parseInt(this.refs.minute.value, 10) : undefined;
        if (minute === undefined || _.isNaN(minute)) {
            minute = defaults[MINUTE] && !_.isNaN(defaults[MINUTE]) ? defaults[MINUTE] : 0;
        }

        let result;
        if (!day && !month && !year && (!hour || !minute)) {
            return null;
        }

        day = day.toString().padStart(2, 0);
        month = month.toString().padStart(2, 0);
        year = year.toString().padStart(4, 0);
        hour = hour.toString().padStart(2, 0);
        minute = minute.toString().padStart(2, 0);

        const toMoment = moment(`${year}-${month}-${day} ${hour}:${minute}`, 'YYYY-MM-DD HH:mm');
        result = toMoment.format();
        return result;
    }

    public getFieldValue(name) {
        if (!this.refs[`${name}`]?.value) {
            return null;
        }
        if (this.dataValue && this.dataValue !== 'Invalid date') {
            try {
                let val = null;
                const date = moment(this.dataValue);

                switch (name) {
                    case 'month':
                        val = date.format('MM');
                        break;
                    case 'day':
                        val = date.format('DD');
                        break;
                    case 'year':
                        val = date.format('YYYY');
                        break;
                    case 'hour':
                        val = date.format('HH');
                        break;
                    case 'minute':
                        val = date.format('mm');
                        break;
                }
                return val;
            } catch (e) {
                return null;
            }
        }
        return null;

    }

    public setValueAt(index, value) {
        // temporary solution to avoid input reset
        // on invalid date.
        if (!value || value === 'Invalid date') {
            return null;
        }
        const date = moment(value);

        if (this.refs.day) {
            this.refs.day.value = date.format('DD');
        }
        if (this.refs.month) {
            this.refs.month.value = date.format('MM');
        }
        if (this.refs.year) {
            this.refs.year.value = date.format('YYYY');
        }
        if (this.refs.hour) {
            this.refs.hour.value = date.format('HH');
        }

        if (this.refs.minute) {
            this.refs.minute.value = date.format('mm');
        }

    }

    public validateRequired(setting, value) {
        const {day, month, year, minute, hour} = this.parts;

        if (this.component.validate.required && !day) {
            return false;
        }

        if (this.component.validate.required && !month) {
            return false;
        }

        if (this.component.validate.required && !year) {
            return false;
        }

        if (this.component.validate.required && !hour) {
            return false;
        }

        if (this.component.validate.required && !minute) {
            return false;
        }

        if (!boolValue(setting)) {
            return true;
        }
        return !this.isEmpty(value);
    }

    private preventNonNumericKeyPress(evt: any) {
        if (evt.which !== 8 && evt.which !== 0 && evt.which < 48 || evt.which > 57) {
            evt.preventDefault();
        }
    }
}
