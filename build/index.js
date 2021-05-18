"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var MatchResults;
(function (MatchResults) {
    MatchResults["HomeWin"] = "H";
    MatchResults["AwayWin"] = "A";
    MatchResults["Draw"] = "D";
})(MatchResults || (MatchResults = {}));
var newCastleWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Newcastle' && match[5] === MatchResults.HomeWin) {
        newCastleWins++;
    }
    if (match[2] === 'Newcastle' && match[5] === MatchResults.AwayWin) {
        newCastleWins++;
    }
}
console.log("Newcastle won " + newCastleWins + " games");
