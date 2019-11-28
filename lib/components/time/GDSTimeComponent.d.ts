declare const Time: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/widgetcomponent/widgetComponent").WidgetComponent>;
export default class GDSTimeComponent extends Time {
    private static MAX_LENGTH;
    attach(element: any): any;
    private preventNonNumericKeyPress;
    private checkAndValidateHour;
    private checkAndValidateMinutes;
    addInputError(message: any, dirty: boolean, element: any): void;
    removeInputError(elements: any): void;
    getValue(): string;
    setValue(value: any, flags: any): boolean;
    render(): any;
}
export {};
