let rng = Math.random;

/**
 * Sets the RNG to use. Your RNG should be a function and should return a value between 0 and 1
 * ```
 * setRNG(Math.random);
 * ```
 * @param {function} r The minimum value
 */
export const setRNG = (r) => {
  if(typeof r === 'function') rng = r;
}

/**
 * A shorthand alias for the random function. Returns a random number between 0 and 1, non-inclusive
 * ```
 * r(); // 0.9263
 * ```
 */
export const r = () => {
  return Math.min(1-Number.MIN_VALUE, Math.max(Number.MIN_VALUE, rng())); // Making sure the random number is between 0 and 1 non-inclusive
}

/**
 * Returns a gaussian distributed random number, centered around a mean.
 * ```
 * gaussianRandom(1, 5); // -2.35257
 * ```
 * @param {number} [mean=0] The mean value
 * @param {number} [std=.5] The standard deviation - how far from the mean the random numbers generate.
 */
export const gaussianRandom = (mean=0, std=.5) => {
  const u = r(), v = r();
  const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  return num * std + mean;
}

/**
 * Returns a random float between two numbers.
 * ```
 * randomBetween(-10, 10); // -1.234576
 * ```
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 */
export const randomBetween = (min, max) => {
  return min + (max - min) * r();
}

/**
 * Returns a random integer between two numbers - min, and max exclusive of max.
 * If you want it to be inclusive of max, set the upper number to a floating point number like 10.99
 * ```
 * randomIntBetween(-10, 10); // 2
 * ```
 * @param {number} min The minimum value
 * @param {number} max The maximum value
 */
export const randomIntBetween = (min, max) => {
  return randomBetween(min, max) | 0;
}

/**
 * Returns a random option from a provided list of options.
 * ```
 * randomOption(["I", "are", "weasel"]); // "weasel"
 * ```
 * @param {array} options An array of options to choose from
 */
export const randomOption = (options) => {
  return options[r() * options.length | 0];
}

/**
 * Returns a random boolean given a weight (optional).
 * ```
 * randomBool(.2); // false
 * ```
 * @param {number} [weight=.5] A weight to test the boolean against, if rand is less than this number, true is returned. Defaults to 0.5
 */
export const randomBool = (weight=.5) => {
  return r() < weight;
}

/**
 * Returns a 2-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * randVec2(); // [.1234, .57351]
 * ```
 */
export const randVec2 = () => {
  return [r(), r()];
};
/**
 * Returns a 3-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * randVec3(); // [.1234, .57351, .01234]
 * ```
 */
export const randVec3 = () => {
  return [r(), r(), r()];
};
/**
 * Returns a 4-dimensional vector, expressed as an array, populated with random numbers 
 * ```
 * randVec4(); // [.1234, .57351, .01234, .9634]
 * ```
 */
export const randVec4 = () => {
  return [r(), r(), r(), r()];
};

/**
 * Returns a weighted random option, given an array of options with weights.
 * ```
 * let color = getWeightedOption([
 *   ["red", 10],
 *   ["green", 30],
 *   ["blue", 50],
 * ]);
 * ```
 * @param {Array[]} options options in the format of [ [ string: optionName, int: optionNumber ] ]
 */
export const weightedOption = (options) => {
  let choices = [];
  for (let i in options)
    choices = choices.concat(new Array(options[i][1]).fill(options[i][0]));
  return randomOption(choices);
};