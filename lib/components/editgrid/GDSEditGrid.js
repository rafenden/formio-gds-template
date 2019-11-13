"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var EditGrid_1 = require("formiojs/components/editgrid/EditGrid");
var GDSEditGrid = /** @class */ (function (_super) {
    __extends(GDSEditGrid, _super);
    function GDSEditGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GDSEditGrid, "defaultRowTemplate", {
        get: function () {
            return "<div class=\"govuk-grid-row\">\n                  {% util.eachComponent(components, function(component) { %}\n                    <div class=\"govuk-grid-column-two-thirds\">\n                      {{ getView(component, row[component.key]) }}\n                    </div>\n                  {% }) %}\n                  {% if (!instance.options.readOnly && !instance.originalComponent.disabled) { %}\n                    <div class=\"govuk-grid-column-one-third\">\n                      <div style=\"float: right\">\n                        <button class=\"govuk-button govuk-button--secondary small-button editRow\"><i class=\"{{ iconClass('edit') }}\"></i></button>\n                        {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}\n                          <button class=\"govuk-button govuk-button--warning small-button removeRow\"><i class=\"{{ iconClass('trash') }}\"></i></button>\n                        {% } %}\n                      </div>\n                    </div>\n                  {% } %}\n                </div>";
        },
        enumerable: true,
        configurable: true
    });
    return GDSEditGrid;
}(EditGrid_1.default));
exports.default = GDSEditGrid;
