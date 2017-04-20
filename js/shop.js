'use strict';

(function () {

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
    evt.target.classList.remove('dropitem');
    evt.target.appendChild(draggedItem);
    inventory.classList.remove('dropzone');
  });

  inventory.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    evt.target.classList.add('dropitem');
  });

  inventory.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.classList.remove('dropitem');
  });

})();
