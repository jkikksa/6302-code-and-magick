'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupSubmit = setup.querySelector('.setup-submit');
  var setupInput = setup.querySelector('.setup-user-name');
  var setupHandle = setup.querySelector('.setup-user-pic');

  /**
   * Reset setup window positions
   */
  var resetPosition = function () {
    setup.style.left = '';
    setup.style.top = '';
  };

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
    resetPosition();
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

  window.renderWizards(WIZARDS_AMOUNT);
  window.utils.toggleHidden(document.querySelector('.setup-similar'), false);

  window.makeDraggable(setupHandle, setup);

  var shop = document.querySelector('.setup-artifacts-shop');
  var inventory = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      inventory.classList.add('dropzone');
    }
  });

  shop.addEventListener('dragend', function (evt) {
    inventory.classList.remove('dropzone');
  });

  inventory.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  inventory.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    inventory.classList.remove('dropzone');
  });

  inventory.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  inventory.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
