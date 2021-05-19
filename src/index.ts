import { MatchReader } from './MatchReader';
import { MatchResults } from './MatchResults';

const reader = new MatchReader('football.csv');
reader.read();

// console.log(reader.data);

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
