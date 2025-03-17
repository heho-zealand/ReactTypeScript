"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BankAccount_1 = require("./BankAccount");
var OverdraftAccount = /** @class */ (function (_super) {
    __extends(OverdraftAccount, _super);
    function OverdraftAccount(ssn, firstName, lastName, limit, overdraftInterest, rateOfInterest) {
        if (overdraftInterest === void 0) { overdraftInterest = 0; }
        if (rateOfInterest === void 0) { rateOfInterest = 0; }
        var _this = _super.call(this, ssn, firstName, lastName, rateOfInterest) || this;
        _this.overdraftLimit = limit;
        _this.overdraftInterest = overdraftInterest;
        return _this;
    }
    OverdraftAccount.prototype.addInterest = function (fee) {
        if (this.balance > 0) {
            this.balance += this.balance * this.rateOfInterest / 100;
        }
        else {
            this.balance -= this.balance * this.overdraftInterest / 100;
        }
        if (fee != null)
            this.balance -= fee;
    };
    return OverdraftAccount;
}(BankAccount_1["default"]));
exports["default"] = OverdraftAccount;
