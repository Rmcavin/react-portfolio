const pomo = require('./images/pomoThumbnail.png')
const calc = require('./images/calcThumbnail.png')
const wiki = require('./images/wikiThumbnail.png')
const twitch = require('./images/twitchThumbnail.png')


module.exports = [
  {
    name: 'Pomodoro Timer',
    image: pomo,
    desc: 'A timer for the Pomodoro Productivity Method built with JQuery.',
    demo: 'https://rmcavin.github.io/FCC_Pomodoro/',
    repo: 'https://github.com/Rmcavin/FCC_Pomodoro/tree/master',
    id: '104'
  },
  {
    name: 'Calculator',
    image: calc,
    desc: 'A calculator built with JQuery and CSS Grid.',
    demo: 'https://rmcavin.github.io/FCC_Calculator',
    repo: 'https://github.com/Rmcavin/FCC_Calculator/tree/master',
    id: '103'
  },
  {
    name: 'Wikipedia Viewer',
    image: wiki,
    desc: 'A wiki search app built with the Wikimedia API and React.js.',
    demo: 'https://rmcavin.github.io/FCC_wikiViewer/',
    repo: 'https://github.com/Rmcavin/FCC_wikiViewer/tree/master',
    id: '102'
  },
  {
    name: 'Twitch Streamer Viewer',
    image: twitch,
    desc: 'A Twitch.tv streamer status viewer built with the Twitch API and JQuery.',
    demo: 'https://rmcavin.github.io/FCC_Twitch/',
    repo: 'https://github.com/Rmcavin/FCC_Twitch/tree/master',
    id: '101'
  },

];
