"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EditGrid_1 = require("formiojs/components/editgrid/EditGrid");
class GDSEditGrid extends EditGrid_1.default {
    static get defaultRowTemplate() {
        return `<div class="govuk-grid-row">
                  {% util.eachComponent(components, function(component) { %}
                    <div class="govuk-grid-column-two-thirds">
                      {{ getView(component, row[component.key]) }}
                    </div>
                  {% }) %}
                  {% if (!instance.options.readOnly && !instance.originalComponent.disabled) { %}
                    <div class="govuk-grid-column-one-third">
                      <div style="float: right">
                        <button class="govuk-button govuk-button--secondary small-button editRow"><i class="{{ iconClass('edit') }}"></i></button>
                        {% if (!instance.hasRemoveButtons || instance.hasRemoveButtons()) { %}
                          <button class="govuk-button govuk-button--warning small-button removeRow"><i class="{{ iconClass('trash') }}"></i></button>
                        {% } %}
                      </div>
                    </div>
                  {% } %}
                </div>`;
    }
}
exports.default = GDSEditGrid;
