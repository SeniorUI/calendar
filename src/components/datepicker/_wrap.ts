/**
 * Wrap function allows scroll values between some range
 * @param {number} min
 * @param {number} max
 * @param {number} v
 *
 * @example
 * if range set from min 1 to max 8 with input value 0 output will be 7
 * wrap(1, 8, 0) -> output 7
 * wrap(1, 5, 5) -> output 1
 * wrap(0, 5, 4) -> output 4
 */
export default function wrap(min: number, max: number, v: number): number {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}
