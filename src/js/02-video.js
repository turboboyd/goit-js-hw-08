import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onСurrentTime, 1000));

const onСurrentTime = function (e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
};

const sevedTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(sevedTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });