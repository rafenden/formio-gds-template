Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-form-group">\n    <div class="govuk-date-input">\n        ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\n        <div class="govuk-date-input__item">\n            <div class="govuk-form-group">\n                <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day" class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n                <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day}}"\n                       type="number" ref="day">\n            </div>\n        </div>\n        ';
 } ;
__p += '\n        ';
 if (ctx.showMonth) { ;
__p += '\n        <div class="govuk-date-input__item">\n            <div class="govuk-form-group">\n                <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month" class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\n                <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month}}"\n                       type="number" ref="month">\n            </div>\n        </div>\n        ';
 } ;
__p += '\n        ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\n        <div class="govuk-date-input__item">\n            <div class="govuk-form-group">\n                <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day" class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n                <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day}}"\n                       type="number" ref="day">\n            </div>\n        </div>\n        ';
 } ;
__p += '\n        ';
 if (ctx.showYear) { ;
__p += '\n        <div class="govuk-date-input__item">\n            <div class="govuk-form-group">\n                <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year" class="govuk-label govuk-date-input__label">' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\n                <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year}}"\n                       type="number" ref="year">\n            </div>\n        </div>\n        ';
 } ;
__p += '\n    </div>\n    <input name="data[day]" type="hidden" class="form-control" lang="en" value="" ref="input">\n</div>';
return __p
}