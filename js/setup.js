'use strict';

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
* Wizard's coat color
* @const {Array<string>}
*/
var WIZARDS_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

/**
* Wizard's eye color
* @const {Array<string>}
*/
var WIZARDS_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

/**
 * Remove class from the element
 * @param {Element} element The DOM element from which the class is removed
 * @param {string} classname Class to be removed
 */
var removeClass = function (element, classname) {
  element.classList.remove(classname);
};

/**
 * Get a random integer number between the minimum number and the maximum number (inclusive)
 * @param {nunber} min
 * @param {nunber} max
 * @return {number}
 */
var getRandomInt = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};

/**
 * Get a random item from an array
 * @param {Array} array
 * @return {*}
 */
var getRandomArrayItem = function (array) {
  return array[getRandomInt(0, array.length - 1)];
};

/**
 * Creates a wizard with specified properties
 * @return {Object}
 */
var generateWizard = function () {
  var randomFullName = getRandomArrayItem(WIZARDS_NAMES) + ' ' + getRandomArrayItem(WIZARDS_SURNAMES);
  var randomCoatColor = getRandomArrayItem(WIZARDS_COATCOLORS);
  var randomEyesColor = getRandomArrayItem(WIZARDS_EYESCOLOR);

  var wizard = {
    'name': randomFullName,
    'coatColor': randomCoatColor,
    'eyesColor': randomEyesColor
  };

  return wizard;
};

/**
 * Creates a list of wizards
 * @param {nunber} amount Amount of wizards
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
 * @type {Element}
 */
var similarWizardTemplate = document.querySelector('#similar-wizard-template');

/**
 * Creates a wizard DOM element
 * @param {Object} obj
 * @return {Element}
 */
var renderWizard = function (obj) {
  var wizard = similarWizardTemplate.content.cloneNode(true);
  var name = wizard.querySelector('.setup-similar-label');
  var coat = wizard.querySelector('.wizard-coat');
  var eyes = wizard.querySelector('.wizard-eyes');

  name.textContent = obj.name;
  coat.style.fill = obj.coatColor;
  eyes.style.fill = obj.eyesColor;

  return wizard;
};

/**
 * Insert a given amount of wizards into the page
 * @param {number} amount
 */
var renderWizards = function (amount) {
  var wizardsArray = generateWizards(amount);
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArray.length; i++) {
    fragment.appendChild(renderWizard(wizardsArray[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragment);
};

removeClass(document.querySelector('.setup'), 'hidden');
renderWizards(4);
removeClass(document.querySelector('.setup-similar'), 'hidden');
