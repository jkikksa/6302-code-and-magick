'use strict';

(function () {
  /**
  * Wizard fireball colors
  * @const {Array<string>}
  */
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  /**
  * Wizard coat colors
  * @const {Array<string>}
  */
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

  /**
  * Wizard eye colors
  * @const {Array<string>}
  */
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];


  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function (evt) {
    wizardCoat.style.fill = window.utils.getRandomArrayItem(WIZARD_COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function (evt) {
    wizardEyes.style.fill = window.utils.getRandomArrayItem(WIZARD_EYES_COLORS);
  });

  wizardFireball.addEventListener('click', function (evt) {
    wizardFireball.style.backgroundColor = window.utils.getRandomArrayItem(WIZARD_FIREBALL_COLORS);
  });
})();
