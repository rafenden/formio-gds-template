import 'govuk-frontend/govuk/all.scss';
import button from './button';
import checkbox from './checkbox';
import columns from './columns';
import component from './component';
import container from './container';
import cssClasses from './cssClasses';
import datagrid from './datagrid';
import day from './day';
import editgrid from './editgrid';
import field from './field';
import fieldset from './fieldset';
import iconClass from './iconClass';
import input from './input';
import label from './label';
import message from './message';
import panel from './panel';
import radio from './radio';
import select from './select';
import selectboxes from './selectboxes';
import selectOption from './selectOption';
import tab from './tab';
import table from './table';
import warning from './warning';
import wizard from './wizard';
import wizardHeader from './wizardHeader';
import wizardNav from './wizardNav';

import {initAll} from 'govuk-frontend';

initAll();
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
    defaultIconset: 'fa',
    iconClass,
    cssClasses,
    button,
    checkbox,
    columns,
    component,
    container,
    day,
    datagrid,
    input,
    editgrid,
    field,
    fieldset,
    label,
    message,
    panel,
    radio,
    select,
    selectboxes,
    selectOption,
    table,
    tab,
    warning,
    wizard,
    wizardHeader,
    wizardNav,
};
