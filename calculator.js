/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 **/
var calculatorModule = function() {
  var memory = 0;
  var total = 0;

  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
   function _load (val) {
      total = val;
      return total;
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
      total += val;
   }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
   function _subtract(val) {
      total -= val;
   }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
   function _multiply(val) {
      total *= val;
   }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
   function _divide(val) {
      total = total / val;
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
  function check(val, method) {
    if (typeof val === 'number')
      return method(val);
    else
      return 'not a number';
   }

   return {
    load : function (val) { return check(val, _load); },
    getTotal : _getTotal,
    add : function (val) { return check(val, _add); },
    subtract : function (val) {return check(val, _subtract); },
    multiply : function (val) {return check(val, _multiply); },
    divide : function (val) {return check(val, _divide); },
    recallMemory : _memory,
    saveMemory : _save,
    clearMemory : _clear
   };
};
