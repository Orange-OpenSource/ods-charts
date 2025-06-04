/**
 *
 * @param {*} from
 * @param {*} to
 * @param {*} nbpoints
 * @returns {
 *  value: number | undefined | null,
 *  timestamp: Date,
 * }[]
 */
export function generatedata(from = new Date('1971-01-26T10:15:30.996+0200'), to = new Date(), nbpoints = 1000, index = 0) {
  const result = [];

  let step = Math.max(10, (to.getTime() - from.getTime()) / (nbpoints + 1));

  let date = new Date(from);

  let random = 1 / (1 + index);

  while (date.getTime() < to.getTime()) {
    const value =
      date.getTime() / new Date('' + (1971 + index * 5) + '-01-26T10:15:30.996+0200').getTime() +
      index +
      Math.cos(date.getTime() * random) +
      Math.sin(date.getTime() * 3 * random) +
      Math.sin(date.getTime() * 18 * random) +
      Math.sin(date.getTime() * 39 * random) +
      Math.sin(date.getTime() * 239 * random) +
      Math.sin(date.getTime() * 2390 * random);

    result.push({ value: value, timestamp: date });
    date = new Date(date.getTime() + step);
  }

  return result;
}

export function getTimeSeriesData(nbPoint = 10000, nbSeries = 3, start = new Date('1971-01-26T10:15:30.996+0200'), end = new Date()) {
  return Array.from({ length: nbSeries }, (val, index) => generatedata(start, end, nbPoint, index));
}
