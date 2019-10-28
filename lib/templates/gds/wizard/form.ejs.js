Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div style="position: relative;">\n    <div class="govuk-breadcrumbs">\n        <ol class="govuk-breadcrumbs__list">\n            ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n            ';
 if (ctx.currentPage === index) { ;
__p += '\n            <li class="govuk-breadcrumbs__list-item" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</li>\n            ';
 } else { ;
__p += '\n            <li class="govuk-breadcrumbs__list-item">\n                <a style="text-decoration:underline" class="govuk-breadcrumbs__link" href="#" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</a>\n            </li>\n            ';
 } ;
__p += '\n            ';
 }) ;
__p += '\n        </ol>\n    </div>\n    <div class="wizard-page" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.components)) == null ? '' : __t) +
'\n    </div>\n        ';
 if (ctx.buttons.cancel) { ;
__p += '\n        <button class="govuk-button govuk-button--secondary" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-cancel">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n        ';
 if (ctx.buttons.previous) { ;
__p += '\n        <button class="govuk-button " ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-previous">' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n        ';
 if (ctx.buttons.next) { ;
__p += '\n        <button class="govuk-button" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next">' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n        ';
 if (ctx.buttons.submit) { ;
__p += '\n            <button class="govuk-button" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\n        ';
 } ;
__p += '\n</div>';
return __p
}