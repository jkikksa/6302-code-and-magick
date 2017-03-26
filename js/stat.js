'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 50);
  ctx.fillText('Список результатов:', 120, 70);

  var HISTOGRAM_HEIGHT = 150;
  var COLUMN_WIDTH = 40;
  var COLUMN_GAP = 50;
  var INITIAL_X = 150;
  var INITIAL_Y = 250;
  var playersMaxTime = -1;
  var columnHeight = -1;
  var offsetX = COLUMN_WIDTH + COLUMN_GAP;

  for (var i = 0; i < times.length; i++) {
    if (times[i] > playersMaxTime) {
      playersMaxTime = times[i];
    }
  }

  var step = HISTOGRAM_HEIGHT / (playersMaxTime - 0);

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = (names[i] === 'Вы') ? '#ff0000' : 'rgba(0, 0, 255,' + Math.random() + ')';
    columnHeight = step * times[i];
    ctx.fillRect(INITIAL_X + offsetX * i, INITIAL_Y - columnHeight, COLUMN_WIDTH, columnHeight);
    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], INITIAL_X + offsetX * i, INITIAL_Y + 20);
    ctx.fillText(Math.round(times[i]), INITIAL_X + offsetX * i, INITIAL_Y - columnHeight - 10);
  }
};
