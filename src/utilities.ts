export const stringDateToDate = (dateStr: string): Date => {
  const dateArr = dateStr
    .split('/')
    .map((num: string): number => parseInt(num));
  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
