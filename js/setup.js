'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupInput = setup.querySelector('.setup-user-name');

  /**
   * @param {KeyboardEvent} evt
   */
  var escPressHandler = function (evt) {
    if (window.utils.isEscapePressed(evt)) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', escPressHandler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', escPressHandler);
  };

  setupOpen.addEventListener('click', function (evt) {
    openPopup();
  });

  setupClose.addEventListener('click', function (evt) {
    closePopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterPressed(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (window.utils.isEnterPressed(evt)) {
      closePopup();
    }
  });

  setupInput.addEventListener('keydown', function (evt) {
    evt.stopPropagation();
  });

  setupSubmit.addEventListener('click', function (evt) {
    if (setupInput.validity.valid) {
      evt.preventDefault();
      closePopup();
    }
  });

  /**
   * Amount of similar wizards on the page
   * @const {number}
   */
  var WIZARDS_AMOUNT = 4;

  window.similarWizards(WIZARDS_AMOUNT);
  window.utils.toggleHidden(document.querySelector('.setup-similar'), false);

})();
