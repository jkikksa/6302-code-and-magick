'use strict';

window.similarWizards = (function () {

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
    var wizardsArray = window.wizardsGetter(amount);
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < amount; i++) {
      fragment.appendChild(getWizardElement(wizardsArray[i]));
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };

  return renderWizards;

})();
