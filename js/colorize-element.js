'use strict';

window.colorizeElement = (function () {

  /**
   * @param {Element} element
   * @param {Array<string>} colors
   * @param {Function} callback
   */
  return function (element, colors, callback) {
    element.addEventListener('click', function () {
      callback(window.utils.getRandomArrayItem(colors));
    });
  };

})();
