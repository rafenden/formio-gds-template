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
var formiojs_1 = require("formiojs");
var moment = require("moment");
var Field = formiojs_1.Components.components['field'];
var Time = formiojs_1.Components.components['time'];
var GDSTimeComponent = /** @class */ (function (_super) {
    __extends(GDSTimeComponent, _super);
    function GDSTimeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GDSTimeComponent.prototype.attach = function (element) {
        var _this = this;
        this.loadRefs(element, {
            hour: 'single',
            minute: 'single',
        });
        // @ts-ignore
        this.addEventListener(this.refs.hour, 'input', function () {
            _this.checkAndValidateHour();
            _this.setPristine(false);
            // @ts-ignore
            _this.checkComponentValidity(_this.data, true);
            // @ts-ignore
            _this.updateValue(null, { modified: true });
        });
        // @ts-ignore
        this.addEventListener(this.refs.minute, 'input', function () {
            _this.checkAndValidateMinutes();
            _this.setPristine(false);
            // @ts-ignore
            _this.checkComponentValidity(_this.data, true);
            // @ts-ignore
            _this.updateValue(null, { modified: true });
        });
        // @ts-ignore
        this.addEventListener(this.refs.hour, 'keypress', function (evt) {
            _this.preventNonNumericKeyPress(evt);
        });
        // @ts-ignore
        this.addEventListener(this.refs.minute, 'keypress', function (evt) {
            _this.preventNonNumericKeyPress(evt);
        });
        return _super.prototype.attach.call(this, element);
    };
    GDSTimeComponent.prototype.preventNonNumericKeyPress = function (evt) {
        // @ts-ignore
        if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
            // @ts-ignore
            evt.preventDefault();
        }
    };
    GDSTimeComponent.prototype.checkAndValidateHour = function () {
        // @ts-ignore
        if (this.refs.hour.value) {
            // @ts-ignore
            if (this.refs.hour.value.length > GDSTimeComponent.MAX_LENGTH) {
                // @ts-ignore
                this.refs.hour.value = this.refs.hour.value.slice(0, 2);
            }
            // @ts-ignore
            var hourAsNumber = parseInt(this.refs.hour.value);
            if (hourAsNumber > 23) {
                // @ts-ignore
                this.refs.hour.value = '23';
            }
            if (hourAsNumber < 0) {
                // @ts-ignore
                this.refs.hour.value = '00';
            }
        }
    };
    GDSTimeComponent.prototype.checkAndValidateMinutes = function () {
        // @ts-ignore
        if (this.refs.minute.value) {
            // @ts-ignore
            if (this.refs.minute.value.length > GDSTimeComponent.MAX_LENGTH) {
                // @ts-ignore
                this.refs.minute.value = this.refs.minute.value.slice(0, 2);
            }
            // @ts-ignore
            var minuteAsNumber = parseInt(this.refs.minute.value);
            if (minuteAsNumber > 59) {
                // @ts-ignore
                this.refs.minute.value = '59';
            }
            if (minuteAsNumber < 0) {
                // @ts-ignore
                this.refs.minute.value = '00';
            }
        }
    };
    // @ts-ignore
    GDSTimeComponent.prototype.addInputError = function (message, dirty, element) {
        // @ts-ignore
        _super.prototype.addInputError.call(this, message, dirty, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        _super.prototype.addInputError.call(this, message, dirty, element);
    };
    GDSTimeComponent.prototype.removeInputError = function (elements) {
        // @ts-ignore
        _super.prototype.removeInputError.call(this, [this.refs.hour, this.refs.minute]);
        // @ts-ignore
        _super.prototype.removeInputError.call(this, elements);
    };
    GDSTimeComponent.prototype.getValue = function () {
        // @ts-ignore
        if (!this.refs.hour.value || !this.refs.minute.value) {
            return '';
        }
        // @ts-ignore
        var value = this.refs.hour.value + ":" + this.refs.minute.value;
        // @ts-ignore
        return moment(value, this.component.format).format(this.component.dataFormat);
    };
    GDSTimeComponent.prototype.setValue = function (value, flags) {
        // @ts-ignore
        if (this.refs.hour && this.refs.minute && value) {
            var parts = value.split(':');
            // @ts-ignore-file
            this.refs.hour.value = parts[0];
            // @ts-ignore
            this.refs.minute.value = parts[1];
            return true;
        }
        return false;
    };
    GDSTimeComponent.prototype.render = function () {
        return Field.prototype.render.call(this, this.renderTemplate('time', {
            // @ts-ignore
            hour: _super.prototype.getValue.call(this).split(':')[0],
            // @ts-ignore
            minute: _super.prototype.getValue.call(this).split(':')[1],
        }));
    };
    GDSTimeComponent.MAX_LENGTH = 2;
    return GDSTimeComponent;
}(Time));
exports.default = GDSTimeComponent;
