console.log(sum(1, 2, 3)); // 6
console.log(sum(1, undefined, 3)); // 4
console.log(sum(1, null, 3)); // 4
console.log(sum(1, Symbol('id'), 3)); // 4
console.log(sum(1, 'asdfsdf', 3)); // 4
console.log(sum(1, '7', 3)); // 11
console.log(sum(1, true, 3)); // 4
console.log(sum(1, {}, 3)); // 4

console.log(sum(2, 3)); // 5
console.log(sum(10, 15, 249, 653, 846)); // 1773


/**
 * Calculate sum of any arguments
 * @param  {...any} args Arguments
 * @returns Sum of numbers in arguments, uncluding text values correctly converted to number
 */
function sum(...args) {
  console.log(args);
  const result = args?.reduce((total, val) => {
    // check for a special case with Symbol and Boolean types
    if (typeof val === 'symbol' || typeof val === 'boolean')
      return total; // return old total value without any addition

    isCorrectNumber = true;

    // check for undefined/null values
    val ?? (isCorrectNumber &&= false);

    const value = Number(val);

    // check for correct number
    isCorrectNumber &&= !Number.isNaN(value);

    if (!isCorrectNumber)
      return total; // return old total value without any addition

    total += value;
    return total;
  }, 0);
  return result;
}