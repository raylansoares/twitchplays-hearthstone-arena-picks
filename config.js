const config = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  votesNeeded: 5,
  identity: {
    username: "myUsername",
    password: "MyOAuthToken"
  },
  channels: ["myChannel"]
};

const keyMap = [
  "C1",
  "C2",
  "C3"
];

let votes = {
  C1: 0,
  C2: 0,
  C3: 0
};

module.exports = { config, keyMap, votes };