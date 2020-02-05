'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDHT = 420;

var Cloud = {
  WIDHT: 420,
  HRIGHT: 270
};

var LEFT = 100;
var TOP = 10;
var GAP = 10;
var FONT_GAP = 25;
var TEXT_HEIGHT = 40;
var COLUMN_HEIGHT = 50;
var barWidht = 40;
var COLUMN_SPACE = 50;

var drawRect = function (ctx, x, y, widht, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, widht, height);
};

var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#0000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.lenght; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  drawRect(ctx, LEFT + GAP, TOP + GAP, Cloud.WIDHT, Cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, LEFT, TOP, CLOUD_WIDHT, CLOUD_HEIGHT, '#fff');

  var maxTime = getMaxElement(times);

  var ScaleFactor = COLUMN_HEIGHT / maxTime;

  drawText(ctx, 'Ура вы победили!', 110, FONT_GAP + GAP);
  drawText(ctx, 'Список результатов:', 110, GAP + TEXT_HEIGHT);

  for (var i = 0; i < players.lenght; i++) {
    var barHeigth = ScaleFactor + times[i];
    var x = LEFT + GAP + COLUMN_SPACE + (barHeight + COLUMN_SPACE) * i;
    var y = LEFT + GAP + COLUMN_HEIGHT - barHeight;
    drawRect(ctx, x, y - FONT_GAP, barWidht, barHeight, players[i] === 'Вы' ? 'rgba(255 0 0 1)' : 'hls(240,' + Math.random() * 100 + '%, 50%)');

    drawText(ctx, players[i], x, CLOUD_HEIGHT - GAP);
    drawText(ctx, Math.round(times[i]), x, y - TEXT_HEIGHT);
  }

};
