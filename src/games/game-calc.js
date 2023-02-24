import { say } from '../cli.js';
import { getRandomNumber, greeting } from '../utils.js';
import runGame from '../index.js';

const BRAIN_CALC_WELCOME = 'What is the result of the expression?';

const prepareBrainCalcQuestion = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  const operand = getRandomNumber(0, 2);
  switch (operand) {
    case 0:
      return [`${num1} + ${num2}`, (num1 + num2).toString()];
    case 1:
      return [`${num1} - ${num2}`, (num1 - num2).toString()];
    case 2:
      return [`${num1} * ${num2}`, (num1 * num2).toString()];
    default:
      return [null, null];
  }
};

const main = () => {
  const userName = greeting();
  say(BRAIN_CALC_WELCOME);

  runGame(userName, prepareBrainCalcQuestion);
};

export default main;
