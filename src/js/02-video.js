import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onСurrentTime = function (e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
};

player.on('timeupdate', throttle(onСurrentTime, 1000));

const sevedTime = localStorage.getItem(STORAGE_KEY);

player.setCurrentTime(sevedTime);