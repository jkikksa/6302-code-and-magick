'use strict';

window.renderWizards = (function () {

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
    coat.style.fill = wizardObj.colorCoat;
    eyes.style.fill = wizardObj.colorEyes;

    return wizard;
  };

  /**
  * @param  {Array<Object>} wizards
  */
  return function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(getWizardElement(wizards[i]));
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };


})();
