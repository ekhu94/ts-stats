"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync('football.csv', {
    encoding: 'utf-8',
})
    .split('\n')
    .map(function (row) { return row.split(','); });
var newCastleWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Newcastle' && match[5] === 'H') {
        newCastleWins++;
    }
    if (match[2] === 'Newcastle' && match[5] === 'A') {
        newCastleWins++;
    }
}
console.log("Newcastle won " + newCastleWins + " games");
