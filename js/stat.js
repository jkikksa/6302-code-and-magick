'use strict';

window.renderStatistics = function (ctx, names, times) {

  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_GAP = 50;
  var INITIAL_X = 150;
  var INITIAL_Y = 250;
  var COLOR_RED = '#ff0000';
  var COLOR_WHITE = '#ffffff';
  var COLOR_BLACK = '#000000';

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getRandomOpacity() {
    return +(Math.random() * 0.5 + 0.5).toFixed(2);
  }

  function getRandomBlue() {
    return 'rgba(0, 0, 255, ' + getRandomOpacity() + ')';
  }

  function drawCloud(options) {
    var posX = options.posX || 0;
    var posY = options.posY || 0;
    var width = options.width || 100;
    var height = options.height || 50;
    var bgColor = options.bgColor || COLOR_WHITE;
    var shadowColor = options.shadowColor || 'rgba(0, 0, 0, 0.7)';
    var shadowOffset = options.shadowOffset || 10;

    ctx.fillStyle = shadowColor;
    ctx.fillRect(posX + shadowOffset, posY + shadowOffset, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(posX, posY, width, height);
  }

  function renderText(options) {
    var text = options.text || '';
    var fontFamily = options.fontFamily || 'PT Mono';
    var fontSize = options.fontSize || '16px';
    var fontColor = options.fontColor || COLOR_BLACK;
    var posX = options.posX || 0;
    var posY = options.posY || 0;

    ctx.fillStyle = fontColor;
    ctx.font = fontSize + fontFamily;
    ctx.fillText(text, posX, posY);
  }

  function drawColumn(options) {
    var posX = options.posX;
    var posY = options.posY;
    var width = options.width;
    var height = options.height;
    var color = options.color;
    var textColor = options.textColor || COLOR_BLACK;
    var playerName = options.playerName;
    var playerTime = options.playerTime;

    ctx.fillStyle = color;
    ctx.fillRect(posX, posY, width, height);

    renderText({
      text: playerName,
      fontColor: textColor,
      posX: posX,
      posY: posY + height + 20
    });

    renderText({
      text: playerTime,
      fontColor: textColor,
      posX: posX,
      posY: posY - 10
    });
  }

  drawCloud({
    posX: 100,
    posY: 10,
    width: 420,
    height: 270
  });

  renderText({
    text: 'Ура, вы победили',
    posX: 120,
    posY: 50
  });

  renderText({
    text: 'Список результатов:',
    posX: 120,
    posY: 70
  });

  var playersMaxTime = getMaxOfArray(times);
  var columnHeight = -1;
  var offsetX = COLUMN_WIDTH + COLUMN_GAP;
  var step = HISTOGRAM_HEIGHT / playersMaxTime;

  for (var i = 0; i < times.length; i++) {
    columnHeight = step * times[i];
    drawColumn({
      posX: INITIAL_X + offsetX * i,
      posY: INITIAL_Y - columnHeight,
      width: COLUMN_WIDTH,
      height: columnHeight,
      color: (names[i] === 'Вы') ? COLOR_RED : getRandomBlue(),
      playerName: names[i],
      playerTime: Math.round(times[i])
    });
  }
};
