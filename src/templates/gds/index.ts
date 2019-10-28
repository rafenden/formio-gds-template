import button from './button';
import checkbox from './checkbox';
import component from './component';
import container from './container';
import cssClasses from './cssClasses';
import day from './day';
import field from './field';
import fieldset from './fieldset';
import input from './input';
import label from './label';
import message from './message';
import panel from './panel';
import radio from './radio';
import select from './select';
import tab from './tab';
import table from './table';
import warning from './warning';
import wizard from './wizard';

export default {
    transform(type, text) {
        if (!text) {
            return text;
        }
        if (type === 'class') {
            return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
        }
        return text;
    },
    cssClasses,
    button,
    checkbox,
    component,
    container,
    day,
    input,
    field,
    fieldset,
    label,
    message,
    panel,
    radio,
    select,
    table,
    tab,
    warning,
    wizard,
};
