import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResults } from './MatchResults';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let newCastleWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Newcastle' && match[5] === MatchResults.HomeWin) {
    newCastleWins++;
  }
  if (match[2] === 'Newcastle' && match[5] === MatchResults.AwayWin) {
    newCastleWins++;
  }
}

console.log(`Newcastle won ${newCastleWins} games`);
