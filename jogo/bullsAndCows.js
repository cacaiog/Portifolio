const NUMBERS_LENGTH = 4;

const body = document.querySelector('body');

const randomWrapper = body.querySelector('.random');
const randomField = randomWrapper.querySelector('.random__value');
const hidingRadio = randomWrapper.querySelector('.random__hide');
const showingRadio = randomWrapper.querySelector('.random__show');

const userForm = body.querySelector('.user-number');
const input = userForm.querySelector('input[type="text"]'); 
const btn = userForm.querySelector('button');

const resultsWrapper = body.querySelector('.results');
const resultsTable = resultsWrapper.querySelector('.results__table');

const getRandomFloating = (min, max) => {
  return min - 0.5 + Math.random() * (max - min + 1);
};

const getRandomInteger = (min, max) => {
  return Math.round(getRandomFloating(min, max));
};

const strToArr = (value) => {
  return [...value.toString()];
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const getRandomStringFromNumbers = (length) => {
  const goalArr = [];
  for (let i = 0; i < length; i++) {
    const index = getRandomInteger(0, numbers.length - 1);
    const removed = numbers.splice(index, 1);
    goalArr.push(removed);
  }
  return goalArr.join('');
};

const randomNumber = getRandomStringFromNumbers(NUMBERS_LENGTH);

randomField.innerText = randomNumber;
randomField.classList.add('visually-hidden');

const findBulls = (knownNum, guessedNum) => {
  const knownArr = strToArr(knownNum);
  const guessedArr = strToArr(guessedNum);

  const matches = knownArr.map((value, index) => {
    if (value === guessedArr[index]) {
      return 1;
    } else {
      return 0;
    }
  });

  return math.sum(...matches);
};

const findCows = (knownNum, guessedNum) => {
  const knownArr = strToArr(knownNum);
  const guessedArr = strToArr(guessedNum);

  const matches = [];

  for (const guessedItem of guessedArr) {
    for (const knownItem of knownArr) {
      if (guessedItem === knownItem) {
        matches.push(1);
      } else {
        matches.push(0);
      }
    }
  }

  return math.sum(...matches);
};

const renderTableCells = (num, bullsNum, cowsNum, counter) => {
  const newTr = document.createElement('TR');
  newTr.innerHTML = `
    <td class="result-${counter}">${num}</td>
    <td class="bulls-${counter}">${bullsNum}</td>
    <td class="cows-${counter}">${cowsNum}</td>`;
  resultsTable.appendChild(newTr);
};

const shakeForm = () => userForm.classList.add('shake');
const normalizeForm = () => userForm.classList.remove('shake');

let counter = 0;



btn.addEventListener('click', () => {
  counter = ++counter;

  const userStr = input.value; 

  if (userStr.length === NUMBERS_LENGTH) {
    renderTableCells(userStr, 
                     findBulls(userStr, randomNumber),
                     findCows(userStr, randomNumber),
                     counter);
    input.value = ''; 
  } else {
    shakeForm();
    setTimeout(normalizeForm, 1000);
  }
});




hidingRadio.addEventListener('click', () => {
  randomField.classList.add('visually-hidden');
});

showingRadio.addEventListener('change', () => {
  randomField.classList.remove('visually-hidden');
});
