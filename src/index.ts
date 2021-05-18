import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let newCastleWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Newcastle' && match[5] === MatchResults.HomeWin) {
    newCastleWins++;
  }
  if (match[2] === 'Newcastle' && match[5] === MatchResults.AwayWin) {
    newCastleWins++;
  }
}

console.log(`Newcastle won ${newCastleWins} games`);
