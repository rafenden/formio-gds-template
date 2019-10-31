import SelectBoxesComponent from 'formiojs/components/selectboxes/SelectBoxes';

export default class GDSCheckBoxes extends SelectBoxesComponent {

    public render(children) {
        // @ts-ignore
        return super.render(this.renderTemplate('selectboxes', {
            // @ts-ignore
            input: this.inputInfo,
            // @ts-ignore
            inline: this.component.inline,
            // @ts-ignore
            values: this.component.values,
            // @ts-ignore
            value: this.dataValue,
            // @ts-ignore
            row: this.row,
        }));
    }
}
