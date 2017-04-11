'use strict';

window.renderSimilarWizards = (function () {

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

  /**
   * Similar Wizard Template
   * @type {DocumentFragment}
   */
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  /**
   * Creates a wizard DOM element
   * @param {Object} wizardObj
   * @return {Element}
   */
  var getWizardElement = function (wizardObj) {
    var wizard = similarWizardTemplate.cloneNode(true);

    var name = wizard.querySelector('.setup-similar-label');
    var coat = wizard.querySelector('.wizard-coat');
    var eyes = wizard.querySelector('.wizard-eyes');

    name.textContent = wizardObj.name;
    coat.style.fill = wizardObj.coatColor;
    eyes.style.fill = wizardObj.eyesColor;

    return wizard;
  };

  /**
  * Insert a given amount of wizards into the page
  * @param {number} amount
  */
  var renderWizards = function (amount) {
    var wizardsArray = generateWizards(amount);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < amount; i++) {
      fragment.appendChild(getWizardElement(wizardsArray[i]));
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  return renderWizards;

})();