import { CsvFileReader } from './CsvFileReader';
import { stringDateToDate } from './utilities';
import { MatchResults } from './MatchResults';
import { MatchData } from './CsvFileReader';

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringDateToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
