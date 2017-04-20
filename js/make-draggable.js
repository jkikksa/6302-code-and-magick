'use strict';

window.makeDraggable = (function () {
  var _element;
  var startCoords = {};
  var shift = {};

  var onMouseMove = function (evt) {
    evt.preventDefault();

    shift = {
      x: startCoords.x - evt.clientX,
      y: startCoords.y - evt.clientY
    };

    startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    _element.style.top = (_element.offsetTop - shift.y) + 'px';
    _element.style.left = (_element.offsetLeft - shift.x) + 'px';
  };

  var onMouseUp = function (evt) {
    evt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  /**
   * Makes element draggable.
   * @param {Element} handle The handle for which the element is dragged
   * @param {Element} element What is dragged
   */
  return function (handle, element) {
    _element = element;

    handle.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };
})();
