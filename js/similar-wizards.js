'use strict';

(function () {

  var wizards;
  var currentCoatColor;
  var currentEyesColor;

  /**
   * @param {Object} wizard
   * @return {number}
   */
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === currentCoatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === currentEyesColor) {
      rank += 1;
    }

    return rank;
  };

  /**
   * @param {number} a
   * @param {number} b
   * @return {number}
   */
  var namesComparator = function (a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  };

  /**
   * Amount of similar wizards on the page
   * @const {number}
   */
  var WIZARDS_AMOUNT = 4;

  var updateWizards = function () {

    var sortedWizards = wizards.sort(function (a, b) {
      var rankDiff = getRank(b) - getRank(a);
      if (rankDiff === 0) {
        rankDiff = namesComparator(a.name, b.name);
      }
      return rankDiff;
    });

    window.renderWizards((sortedWizards), WIZARDS_AMOUNT);
  };

  /**
   * @param {string} color
   */
  window.wizard.onCoatChange = function (color) {
    currentCoatColor = color;
    window.debounce(updateWizards);
  };

  /**
   * @param {string} color
   */
  window.wizard.onEyesChange = function (color) {
    currentEyesColor = color;
    window.debounce(updateWizards);
  };

  window.load('https://intensive-javascript-server-kjgvxfepjl.now.sh/code-and-magick/data', function (wizardsList) {
    wizards = wizardsList;
    updateWizards();
  });

  window.utils.toggleHidden(document.querySelector('.setup-similar'), false);

})();
