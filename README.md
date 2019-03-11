# Twitch Plays Hearthstone Arena Pick

Connects a chat bot to Twitch chat via IRC to receive and send commands to a python script that controls Hearthstone

Tested and working on Windows 10

## How it works

The bot reads every line of chat from twitch chat and will move to the command coordinate and click on the specified location when the command reaches the required number of votes

- Currently, the coordinates are hard-coded for 1080p and won't work for any other resolution unless they are changed manually
- A python script to find monitor coordinates is included in the repo

## Installation


#### Download and install node.js (LTS) and python 3

- Node.js: https://nodejs.org/download/
- Python 3: https://www.python.org/ftp/python/3.7.2/python-3.7.2.exe

#### Clone or download the repo

- git clone https://github.com/wujerry573/TwitchPlaysHearthstone.git
- Enter on folder TwitchPlaysHearthstone

#### Install

- execute the file "install.sh"


## Setup up config file

Edit the config.js file to your Twitch **username**, **password**(OAUTH token), **channel** and the quantity of **votes** required to pick a card

- Usually the channel is the same as the username
- http://www.twitchapps.com/tmi to generate your OAUTH token

## Running the bot

- execute the file "start.sh"
