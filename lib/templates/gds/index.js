"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("govuk-frontend/govuk/all.scss");
const button_1 = require("./button");
const checkbox_1 = require("./checkbox");
const columns_1 = require("./columns");
const component_1 = require("./component");
const container_1 = require("./container");
const cssClasses_1 = require("./cssClasses");
const datagrid_1 = require("./datagrid");
const day_1 = require("./day");
const field_1 = require("./field");
const fieldset_1 = require("./fieldset");
const iconClass_1 = require("./iconClass");
const input_1 = require("./input");
const label_1 = require("./label");
const message_1 = require("./message");
const panel_1 = require("./panel");
const radio_1 = require("./radio");
const select_1 = require("./select");
const selectOption_1 = require("./selectOption");
const tab_1 = require("./tab");
const table_1 = require("./table");
const warning_1 = require("./warning");
const wizard_1 = require("./wizard");
const wizardHeader_1 = require("./wizardHeader");
const wizardNav_1 = require("./wizardNav");
const govuk_frontend_1 = require("govuk-frontend");
govuk_frontend_1.initAll();
exports.default = {
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
    iconClass: iconClass_1.default,
    cssClasses: cssClasses_1.default,
    button: button_1.default,
    checkbox: checkbox_1.default,
    columns: columns_1.default,
    component: component_1.default,
    container: container_1.default,
    day: day_1.default,
    datagrid: datagrid_1.default,
    input: input_1.default,
    field: field_1.default,
    fieldset: fieldset_1.default,
    label: label_1.default,
    message: message_1.default,
    panel: panel_1.default,
    radio: radio_1.default,
    select: select_1.default,
    selectOption: selectOption_1.default,
    table: table_1.default,
    tab: tab_1.default,
    warning: warning_1.default,
    wizard: wizard_1.default,
    wizardHeader: wizardHeader_1.default,
    wizardNav: wizardNav_1.default,
};
