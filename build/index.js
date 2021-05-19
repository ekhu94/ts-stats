"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResults_1 = require("./MatchResults");
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var newCastleWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Newcastle' && match[5] === MatchResults_1.MatchResults.HomeWin) {
        newCastleWins++;
    }
    if (match[2] === 'Newcastle' && match[5] === MatchResults_1.MatchResults.AwayWin) {
        newCastleWins++;
    }
}
console.log("Newcastle won " + newCastleWins + " games");
