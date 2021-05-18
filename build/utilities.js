"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringDateToDate = void 0;
var stringDateToDate = function (dateStr) {
    var dateArr = dateStr
        .split('/')
        .map(function (num) { return parseInt(num); });
    return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
exports.stringDateToDate = stringDateToDate;
