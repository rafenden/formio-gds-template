declare const Day: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
export default class GDSDatetimeComponent extends Day {
    get defaultValue(): any;
    get emptyValue(): any;
    get parts(): {
        day: any;
        month: any;
        year: any;
        hour: any;
        minute: any;
    };
    private refs;
    private component;
    private updateValue;
    private renderField;
    private inputDefinition;
    private checkComponentValidity;
    private triggerChange;
    private timeHelper;
    attach(element: any): any;
    init(): void;
    addInputError(message: any, dirty: any, elements: any): void;
    removeInputError(elements: any): void;
    render(): any;
    getDate(value: any): any;
    getFieldValue(name: any): any;
    setValueAt(index: any, value: any): any;
    validateRequired(setting: any, value: any): boolean;
    private processField;
    private preventNonNumericKeyPress;
}
export {};
