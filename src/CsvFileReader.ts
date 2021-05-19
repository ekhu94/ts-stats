import fs from 'fs';

import { MatchResults } from './MatchResults';
import { stringDateToDate } from './utilities';

// TUPLE
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResults,
  string
];

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
