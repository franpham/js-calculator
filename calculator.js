/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 **/
var calculatorModule = (function() {
  var memory = 0;
  var total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function _load (val) {
    if (check(val)) {
      total = val;
      return total;
    }
    return 'not a number';
   }

  /**
   * Return the value of `total`
   * @return { Number }
   */
   function _getTotal () {
    return total;
   }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
   function _add(val) {
    if (check(val)) {
      total += val;
    }
    return 'not a number';
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(val) {
    if (check(val)) {
      total -= val;
    }
    return 'not a number';
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(val) {
    if (check(val)) {
      total *= val;
    }
    return 'not a number';
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(val) {
    if (check(val)) {
      total = total / val;
    }
    return 'not a number';
   }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
   function _memory() {
    return memory;
   }

  /**
   * Stores the value of `total` to `memory`
   */
   function _save() {
    memory = total;
   }

  /**
   * Clear the value stored at `memory`
   */
   function _clear() {
    memory = 0;
   }

  /**
   * Validation
   */
  function check(val) {
    if (typeof val === 'number')
      return true;
    else
      return false;
   }

   return {
    load : _load,
    getTotal : _getTotal,
    add : _add,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _memory,
    saveMemory : _save,
    clearMemory : _clear
   };
});