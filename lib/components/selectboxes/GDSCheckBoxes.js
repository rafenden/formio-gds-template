"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SelectBoxes_1 = require("formiojs/components/selectboxes/SelectBoxes");
class GDSCheckBoxes extends SelectBoxes_1.default {
    render(children) {
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
exports.default = GDSCheckBoxes;
