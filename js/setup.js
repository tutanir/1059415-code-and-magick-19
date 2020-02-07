'use strict';

var WIZARDS_COUNT = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var wizards = [];
var setupElement = document.querySelector('.setup');
var similarListElement = setupElement.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

setupElement.classList.remove('hidden');

var addWizard = function () {
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push({
      name: NAMES[Math.floor(Math.random() * NAMES.length)] + ' ' + SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: '',
      eyesColor: ''
    });
  }
};

addWizard();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  // wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var renderWizards = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {

    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

renderWizards();
similarListElement.parentElement.classList.remove('hidden');
