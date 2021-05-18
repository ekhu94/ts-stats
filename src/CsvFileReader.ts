import fs from 'fs';

import { MatchResults } from './MatchResults';
import { stringDateToDate } from './utilities';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map((row: string[]): any => {
        return [
          stringDateToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6],
        ];
      });
  }
}
