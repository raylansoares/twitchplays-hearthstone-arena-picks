const tmi = require("tmi.js");
const config = require("./config");
const exec = require("child_process").exec;
const _unct = require("underscore");

let client = new tmi.client(config.config);

let voteCounter = 0;

client.connect();
client.on("connected", connectionCheck);

client.on("message", readMessage);

function connectionCheck(address, port) {
  console.log(`connection successful to ${address}:${port}`);
}

async function readMessage(target, context, message, self) {
  if (self) return;

  let command = message.toUpperCase();

  if (config.keyMap.includes(command)) {
    config.votes[command]++;
    voteCounter++;

    if (voteCounter === config.config.votesNeeded) {
      let winning = countVote();
      voteCounter = 0;
      await exec("key.py " + winning[0]);
      await new Promise(resolve => setTimeout(resolve, 1000));
      await exec("key.py " + winning[1]);

      for (let key in config.votes) {
        config.votes[key] = 0;
      }
    }
  }
}

function countVote() {
  let highest1 = 0;
  let highest2 = 0;
  let current = 0;
  for (let key in config.votes) {
    current = config.votes[key];
    if (current > highest1) {
      highest1 = current;
    }
  }
  current = 0;
  for (let key in config.votes) {
    current = config.votes[key];
    if (current === highest1) {
      current = 0;
    } else if (current > highest2 && highest2 < highest1) {
      highest2 = current;
    }
  }

  return [
    _unct.invert(config.votes)[highest1],
    _unct.invert(config.votes)[highest2]
  ];
}
