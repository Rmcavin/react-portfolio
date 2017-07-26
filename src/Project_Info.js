const pomo = require('./images/pomoThumbnail.png')
const calc = require('./images/calcThumbnail.png')
const wiki = require('./images/wikiThumbnail.png')
const twitch = require('./images/twitchThumbnail.png')


module.exports = [
  {
    name: 'Pomodoro Timer',
    image: pomo,
    desc: 'A timer for the Pomodoro Productivity Method built with JQuery.',
    demo: 'hello',
    docs: 'hi',
    code: 'hey',
    id: '104'
  },
  {
    name: 'Calculator',
    image: calc,
    desc: 'A calculator built with JQuery and CSS Grid.',
    demo: 'hey there',
    docs: 'hi there',
    code: 'hello there',
    id: '103'
  },
  {
    name: 'Wikipedia Viewer',
    image: wiki,
    desc: 'A wiki search app built with the Wikimedia API and React.js',
    demo: 'https://rmcavin.github.io/FCC_wikiViewer/',
    docs: 'hi there',
    code: 'hello there',
    id: '102'
  },
  {
    name: 'Twitch Streamer Viewer',
    image: twitch,
    desc: 'A Twitch.tv streamer status viewer built with the Twitch API and JQuery.',
    demo: 'https://rmcavin.github.io/FCC_Twitch/',
    docs: 'hi there',
    code: 'hello there',
    id: '101'
  },

];
