'use strict';

window.wizard = (function () {
  /**
  * Wizard fireball colors
  * @const {Array<string>}
  */
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  /**
  * Wizard coat colors
  * @const {Array<string>}
  */
  var WIZARD_COAT_COLORS = [
    'rgb(146, 100, 161)',
    'rgb(215, 210, 55)',
    'rgb(241, 43, 107)',
    'rgb(101, 137, 164)',
    'rgb(0, 0, 0)',
    'rgb(215, 210, 55)',
    'rgb(56, 159, 117)',
    'rgb(241, 43, 107)',
  ];

  /**
  * Wizard eye colors
  * @const {Array<string>}
  */
  var WIZARD_EYES_COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'lightblue',
    'blue',
    'purple'
  ];

  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var onCoatChange = function () {};
  var onEyesChange = function () {};

  var currentCoatColor = null;
  var currentEyesColor = null;

  window.colorizeElement(wizardCoat, WIZARD_COAT_COLORS, function (color) {
    wizardCoat.style.fill = color;
    currentCoatColor = color;
    window.wizard.onCoatChange(currentCoatColor);
  });

  window.colorizeElement(wizardEyes, WIZARD_EYES_COLORS, function (color) {
    wizardEyes.style.fill = color;
    currentEyesColor = color;
    window.wizard.onEyesChange(currentEyesColor);
  });

  window.colorizeElement(wizardFireball, WIZARD_FIREBALL_COLORS, function (color) {
    wizardFireball.style.backgroundColor = color;
  });

  return {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange
  };

})();
