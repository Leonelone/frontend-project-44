#!/usr/bin/env node
import nameUser from '../src/cli.js';

const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    nameUser();
};

greetUser();