/**
 * Splits an array into chunks of the specified size.
 *
 * @param {Array} array - The array to split.
 * @param {number} size - The size of each chunk.
 * @returns {Array[]} The array of chunked subarrays.
 * @throws {Error} Throws an error if size is not a positive number.
 */
export const splitArray = (array, size) => {
  if (size <= 0) {
    throw new Error('Size must be a positive number');
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
