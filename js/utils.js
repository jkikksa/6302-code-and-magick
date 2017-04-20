'use strict';

window.utils = (function () {

  /**
   * Keyboard key codes
   * @enum {number}
   */
  var KeyCodes = {
    ENTER: 13,
    ESC: 27
  };

  /**
   * Get a random integer number between the minimum number and the maximum number (inclusive)
   * @param {number} min
   * @param {number} max
   * @return {number}
   */
  var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };

  return {

    /**
     * @param {KeyboardEvent} evt
     * @return {boolean}
     */
    isEnterPressed: function (evt) {
      return evt.keyCode === KeyCodes.ENTER;
    },

    /**
     * @param {KeyboardEvent} evt
     * @return {boolean}
     */
    isEscapePressed: function (evt) {
      return evt.keyCode === KeyCodes.ESC;
    },

    /**
    * Get a random item from an array
    * @param {Array} array
    * @return {*}
    */
    getRandomArrayItem: function (array) {
      return array[getRandomInt(0, array.length - 1)];
    },

    /**
     * Toggle class 'hidden' in the element.
     * @param {Element} element The DOM element in which the class is toggled
     * @param {boolean} state If false - remove class, if true - add class.
     */
    toggleHidden: function (element, state) {
      element.classList.toggle('hidden', state);
    },

    getRandomInt: getRandomInt
  };
})();
