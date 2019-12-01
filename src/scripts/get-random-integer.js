/**
 * Get a Random Integer Between Two Values
 *
 * Returns a random integer between (and inclusive of) the specified values.
 *
 * @see http://mdn.io/math.random
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default getRandomInt;
