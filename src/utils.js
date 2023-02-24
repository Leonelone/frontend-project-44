import {ask, say} from "./cli.js";

const BRAIN_GAMES_WELCOME_MESSAGE = 'Welcome to the Brain Games!\nMay I have your name? ';

export const greeting = () => {
  const userName = ask(BRAIN_GAMES_WELCOME_MESSAGE);
  say(`Hello, ${userName}!`);

  return userName;
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const gameOver = (userAnswer, correctAnswer, userName) => {
  say(
    `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
  );
};