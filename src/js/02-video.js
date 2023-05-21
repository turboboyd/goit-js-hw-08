import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate (e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
};

const savedTime = localStorage.getItem(STORAGE_KEY);
const time = parseFloat(savedTime);
player.setCurrentTime(time);
