Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-breadcrumbs">\n    <ol class="govuk-breadcrumbs__list">\n        ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n        ';
 if (ctx.currentPage === index) { ;
__p += '\n        <li class="govuk-breadcrumbs__list-item" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</li>\n        ';
 } else { ;
__p += '\n        <li class="govuk-breadcrumbs__list-item">\n            <a style="text-decoration:underline" class="govuk-breadcrumbs__link" href="#" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</a>\n        </li>\n        ';
 } ;
__p += '\n        ';
 }) ;
__p += '\n    </ol>\n</div>';
return __p
}