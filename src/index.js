import { ask, say } from './cli.js';
import { gameOver } from './utils.js';

const runGame = (userName, questionFunc) => {
  let count = 0;
  const limit = 3;
  while (count < limit) {
    const [question, correctAnswer] = questionFunc();
    say(`Question: ${question}`);

    const userAnswer = ask('Your answer: ');
    if (userAnswer === correctAnswer) {
      say('Correct!');
      count += 1;
    } else {
      gameOver(userAnswer, correctAnswer, userName);
      break;
    }
    say(`Congratulations, ${userName}!`);
  }
};

export default runGame;
