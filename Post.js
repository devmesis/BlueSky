import { BskyAgent } from '@atproto/api';
import dotenv from 'dotenv';

dotenv.config();

const agent = new BskyAgent({
  service: 'https://bsky.social',
});

start();

async function start() {
  try {
    await login();
    await post('Choo choo!');
  } catch (error) {
    console.error(error);
  }
}

async function login() {
  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME,
      password: process.env.BLUESKY_PASSWORD,
    });
  } catch (error) {
    console.error(error);
  }
}

async function post(content) {
  try {
    const response = await agent.post({
      text: content,
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
