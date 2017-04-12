'use strict';

window.wizardsGetter = (function () {

  /**
  * List of names of wizards
  * @const {Array<string>}
  */
  var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

  /**
  * List of surnames of wizards
  * @const {Array<string>}
  */
  var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  /**
  * Wizard's coat colors
  * @const {Array<string>}
  */
  var WIZARDS_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  /**
  * Wizard's eye colors
  * @const {Array<string>}
  */
  var WIZARDS_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  /**
   * Creates a wizard with specified properties
   * @return {Object}
   */
  var generateWizard = function () {
    return {
      'name': window.utils.getRandomArrayItem(WIZARDS_NAMES) + ' ' + window.utils.getRandomArrayItem(WIZARDS_SURNAMES),
      'coatColor': window.utils.getRandomArrayItem(WIZARDS_COAT_COLORS),
      'eyesColor': window.utils.getRandomArrayItem(WIZARDS_EYES_COLORS)
    };
  };

  /**
   * Creates a list of wizards
   * @param {number} amount Amount of wizards
   * @return {Array<Object>}
   */
  var generateWizards = function (amount) {
    var wizardsArray = [];

    for (var i = 0; i < amount; i++) {
      wizardsArray.push(generateWizard());
    }

    return wizardsArray;
  };

  return generateWizards;

})();
