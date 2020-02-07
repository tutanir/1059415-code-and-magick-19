'use strict';

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [];
var setupElement = document.querySelector('.setup');
var similarListElement = setupElement.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

setupElement.classList.remove('hidden');

var addWizard = function () {//функция
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push({
      name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)]
    });
  }
};

addWizard();//вызов

var renderWizard = function (wizard) {//функция
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var renderWizards = function () {//функция
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {

    fragment.appendChild(renderWizard(wizards[i]));//вызов
  }

  similarListElement.appendChild(fragment);
};

renderWizards();//вызов
similarListElement.parentElement.classList.remove('hidden');
