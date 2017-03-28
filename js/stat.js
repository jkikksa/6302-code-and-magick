'use strict';

var getMaxOfArray = function (numArray) {
  return Math.max.apply(null, numArray);
};

var getRandomOpacity = function () {
  return +(Math.random() * 0.5 + 0.5).toFixed(2);
};

var getRandomBlue = function () {
  return 'rgba(0, 0, 255, ' + getRandomOpacity() + ')';
};

var drawCloud = function (ctx, posX, posY, width, height) {
  var BG_COLOR = '#ffffff';
  var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
  var SHADOW_OFFSET = 10;

  ctx.fillStyle = SHADOW_COLOR;
  ctx.fillRect(posX + SHADOW_OFFSET, posY + SHADOW_OFFSET, width, height);
  ctx.fillStyle = BG_COLOR;
  ctx.fillRect(posX, posY, width, height);
};

var drawRect = function (ctx, posX, posY, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(posX, posY, width, height);
};

var renderText = function (ctx, text, posX, posY) {
  var FONT = '16px PT Mono';
  var FONT_COLOR = '#000000';

  ctx.fillStyle = FONT_COLOR;
  ctx.font = FONT;
  ctx.fillText(text, posX, posY);
};

var drawHistogram = function (ctx, posX, posY, names, times) {
  var COLUMN_GAP = 50;
  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var CURRENT_PLAYER_NAME = 'Вы';
  var CURRENT_PLAYER_COLOR = '#ff0000';
  var color;
  var playersMaxTime = getMaxOfArray(times);
  var barHeight = -1;
  var offsetX = BAR_WIDTH + COLUMN_GAP;
  var step = HISTOGRAM_HEIGHT / playersMaxTime;

  for (var i = 0; i < times.length; i++) {
    barHeight = step * times[i];
    color = names[i] === CURRENT_PLAYER_NAME ? CURRENT_PLAYER_COLOR : getRandomBlue();

    drawRect(ctx, posX + offsetX * i, posY - barHeight, BAR_WIDTH, barHeight, color);
    renderText(ctx, names[i], posX + offsetX * i, posY - barHeight - 10);
    renderText(ctx, Math.round(times[i]), posX + offsetX * i, posY + 20);
  }
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, 100, 10, 420, 270);
  renderText(ctx, 'Ура, вы победили', 120, 50);
  renderText(ctx, 'Список результатов:', 120, 70);
  drawHistogram(ctx, 150, 250, names, times);
};
