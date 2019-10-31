"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SelectBoxes_1 = require("formiojs/components/selectboxes/SelectBoxes");
class GDSSelectboxes extends SelectBoxes_1.default {
    render() {
        return super.render(this.renderTemplate('radio', {
            input: this.inputInfo,
            inline: this.component.inline,
            values: this.component.values,
            value: this.dataValue,
            row: this.row,
        }));
    }
}
exports.default = GDSSelectboxes;
