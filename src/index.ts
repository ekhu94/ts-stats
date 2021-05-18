import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => row.split(','));

enum MatchResults {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let newCastleWins = 0;

for (let match of matches) {
  if (match[1] === 'Newcastle' && match[5] === MatchResults.HomeWin) {
    newCastleWins++;
  }
  if (match[2] === 'Newcastle' && match[5] === MatchResults.AwayWin) {
    newCastleWins++;
  }
}

console.log(`Newcastle won ${newCastleWins} games`);
