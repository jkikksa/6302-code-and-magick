'use strict';

window.colorizeElement = (function () {

  /**
   * @param {Array<string>} colors
   * @param {Function} callback
   */
  return function (colors, callback) {
    callback(window.utils.getRandomArrayItem(colors));
  };

})();
