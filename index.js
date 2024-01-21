import { config } from "dotenv";
config();

import OpenAI from "openai";
import readline from "readline";

const openai = new OpenAI({apiKey: process.env.API_KEY});

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async input => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: input}],
    model: 'gpt-3.5-turbo',
  });

  console.log('return value', completion.choices[0].message.content);
  userInterface.prompt();
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: 'You are a helpful assistant'}],
    model: 'gpt-3.5-turbo',
  });

  console.log('return value', completion.choices[0].message.content);
}

console.log('index.js runnng');
// main();
// const API_KEY = process.env.API_KEY;
// console.log('key', API_KEY)