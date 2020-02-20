Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="govuk-table res-datagrid ' +
((__t = (ctx.component.customClass)) == null ? '' : __t) +
'" ';
 if (ctx.component.layoutFixed) { ;
__p += 'style="table-layout: fixed;" ';
 } ;
__p += '>\n    ';
 if (ctx.hasHeader) { ;
__p += '\n    <thead class="govuk-table__head">\n    <tr class="govuk-table__row">\n        ';
 if (ctx.component.reorder) { ;
__p += '\n        <th class="govuk-table__header" id="reorder"></th>\n        ';
 } ;
__p += '\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <th class="govuk-table__header ' +
((__t = (col.validate && col.validate.required ? 'field-required' : '')) == null ? '' : __t) +
'">\n            ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\n            ';
 if (col.tooltip) { ;
__p += '\n            <details class="govuk-details" style="margin-top: 5px">\n                <summary class="govuk-details__summary">\n                        <span class="govuk-details__summary-text">\n                          ' +
((__t = (col.tooltipTitle || 'Help')) == null ? '' : __t) +
'\n                        </span>\n                </summary>\n                <div class="govuk-details__text">\n                    ' +
((__t = (col.tooltip)) == null ? '' : __t) +
'\n                </div>\n            </details>\n            ';
 } ;
__p += '\n        </th>\n        ';
 }) ;
__p += '\n        ';
 if (ctx.hasExtraColumn) { ;
__p += '\n        <th class="govuk-table__header">\n            ';
 if (ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\n            <button class="govuk-button govuk-button--secondary" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\n                ' +
((__t = (ctx.t('Add Another'))) == null ? '' : __t) +
'\n            </button>\n            ';
 } ;
__p += '\n        </th>\n        ';
 } ;
__p += '\n    </tr>\n    </thead>\n    ';
 } ;
__p += '\n    <tbody class="govuk-table__body" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody">\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\n    ';
 if (ctx.hasGroups && ctx.groups[index]) { ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-header" class="govuk-table__row">\n        <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-label"\n            colspan="' +
((__t = (ctx.numColumns)) == null ? '' : __t) +
'"\n            class="govuk-table__header datagrid-group-label">' +
((__t = (ctx.groups[index].label)) == null ? '' : __t) +
'\n        </td>\n    </tr>\n    ';
 } ;
__p += '\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row" class="govuk-table__row">\n        ';
 if (ctx.component.reorder) { ;
__p += '\n        <td class="govuk-table__cell" id="reorder">\n            <button type="button" style="position: absolute;margin-top: 15px;" title="Reorder item"\n                    class="formio-drag-button govuk-button govuk-button--secondary"><i class="fa fa-bars"></i>\n            </button>\n        </td>\n        ';
 } ;
__p += '\n        ';
 ctx.columns.forEach(function(col) { ;
__p += '\n        <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'" data-label="' +
((__t = ( ctx.t(col.label || col.title) )) == null ? '' : __t) +
'" class="govuk-table__cell">\n            ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\n        </td>\n        ';
 }) ;
__p += '\n        ';
 if (ctx.hasExtraColumn) { ;
__p += '\n        ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\n        <td class="govuk-table__cell">\n            <button aria-label="Remove item" title="Remove item" type="button"\n                    class="govuk-button govuk-button--warning" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow"\n                    style="float: right;margin-top: 15px;">\n                <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\n            </button>\n        </td>\n        ';
 } ;
__p += '\n        ';
 if (ctx.canAddColumn) { ;
__p += '\n        <td ref="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-container">\n            ' +
((__t = (ctx.placeholder)) == null ? '' : __t) +
'\n        </td>\n        ';
 } ;
__p += '\n        ';
 } ;
__p += '\n    </tr>\n    ';
 }) ;
__p += '\n    </tbody>\n    ';
 if (ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\n    <tfoot>\n    <tr>\n        <td colspan="' +
((__t = (ctx.numColumns + 1)) == null ? '' : __t) +
'">\n            <button class="govuk-button govuk-button--secondary" aria-label="' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'"\n                    ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\n                <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\n            </button>\n        </td>\n    </tr>\n    </tfoot>\n    ';
 } ;
__p += '\n</table>\n';
return __p
}