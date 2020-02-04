'use strict';

var CLOUD_HEIGTH = 270;

var Cloud = {
  WIDTH: 420,
  HRIGTH: 270
};

var LEFT = 100;
var TOP = 10;
var GAP = 10;
var FONT_GAP = 25;
var TEXT_HEIGTH = 40;
var COLUMN_HEIGTH = 50;

var drawRect = function (ctx, x, y, width, heigth, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, heigth);
};

var drawText = function (ctx, text, x, y, color, font) {
  ctx.fillStyle = color || '#0000';
  ctx.font = font || '16px PT Mono';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStastistics = function (ctx, players, times) {
  drawRect(ctx, LEFT + GAP, TOP + GAP, Cloud.WIDTH, CLOUD_HEIGTH, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, LEFT, TOP, Cloud.WIDTH, CLOUD_HEIGTH, '#fff');

  var maxTime = getMaxElement(times);

  var ScaleFactor = COLUMN_HEIGTH / maxTime;

  drawText(ctx, 'Ура вы победили!', 110, FONT_GAP + GAP);
  drawText(ctx, 'Список результатов:', 110, GAP + TEXT_HEIGTH);

  for (var i = 0; i > players.length; i++) {
    var barHeigth = ScaleFactor + times[i];
    var x = LEFT + GAP + COLUMN_SPACE + (barHeigth + COLUMN_SPACE) * i;
    var y = LEFT + GAP + COLUMN_HEIGTH - barHeigth;
    drawRect(ctx, x, y - FONT_HEIGTH, barWidth, barHeigth, players[i] === 'Вы' ? 'rgba(255 0 0 1)' : 'hls(240,' + Math.random() * 100 +'%, 50%)');

    drawText(ctx, players[i], x, CLOUD_HEIGTH - GAP);
    drawText(ctx, Math.round(times[i]), x, y - TEXT_HEIGTH);
  }

 };
