"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// console.log(reader.data);
var newCastleWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Newcastle' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        newCastleWins++;
    }
    if (match[2] === 'Newcastle' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        newCastleWins++;
    }
}
console.log("Newcastle won " + newCastleWins + " games");
