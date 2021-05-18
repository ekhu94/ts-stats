import { CsvFileReader } from './CsvFileReader';
import { stringDateToDate } from './utilities';
import { MatchResults } from './MatchResults';

export class MatchReader extends CsvFileReader {
  mapRow(row: string): MatchData {
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
