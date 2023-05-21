import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAG_KEY = 'videoplayer-current-time';



  const iframe = document.querySelector('iframe');
  const player = new Player(iframe);

  player.on('play', function() {
      console.log('played the video!');
  });

  player.getVideoTitle().then(function(title) {
      console.log('title:', title);
  });

const onСurrentTime = function (e) {
  localStorage.setItem(STORAG_KEY, e.seconds);
};

player.on('timeupdate', onСurrentTime);

const sevedTime = localStorage.getItem(STORAG_KEY);

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




// // const iframe = document.querySelector('#vimeo-player');
// // const player = new Player(iframe);

// // player.on('timeupdate', throttle(timeUpdate, 1000));

// // function timeUpdate (e) {
// //   localStorage.setItem(STORAG_KEY, e.seconds);
// // };

// // const savedTime = localStorage.getItem(STORAG_KEY);
// // const time = parseFloat(savedTime);
// // player.setCurrentTime(time);



// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// // player.on('play', function() {
// //     console.log('played the video!');
// // });

// // player.getVideoTitle().then(function(title) {
// //     console.log('title:', title);
// // });

// const onPlays = function (e) {
//   console.log(e.seconds);
//   localStorage.setItem(STORAG_KEY, e.seconds);
// };

// player.on('timeupdate',throttle(onPlays, 1000));

// const savedTime = localStorage.getItem(STORAG_KEY);

// player
//   .setCurrentTime(savedTime)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });