import { say } from '../cli.js';
import { getRandomNumber, greeting } from '../utils.js';
import runGame from '../index.js';

const BRAIN_GCD_WELCOME = 'Find the greatest common divisor of given numbers.';

const prepareBrainGcdQuestion = () => {
  let num1 = getRandomNumber(1, 50);
  let num2 = getRandomNumber(1, 50);

  const question = `${num1} ${num2}`;

  while (num2) {
    const res = num2;
    num2 = num1 % num2;
    num1 = res;
  }

  return [question, num1.toString()];
};

const main = () => {
  const userName = greeting();
  say(BRAIN_GCD_WELCOME);

  runGame(userName, prepareBrainGcdQuestion);
};

export default main;
