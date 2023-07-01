import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY = 'videoplayer-current-time'
const startPlayTime = localStorage.getItem(KEY) || 0.00

player.setCurrentTime(startPlayTime).catch(handlerError);
player.on('timeupdate', throttle(onPlay, 1000) );

function onPlay() {
    player.getCurrentTime().then( seconds => 
        localStorage.setItem(KEY, seconds)
    ) 
}

function handlerError(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('the time was less than 0 or greater than the videos duration');
            player.setCurrentTime(0.00)
            break;
        default:
            console.log('some other error occurred');
            player.setCurrentTime(0.00)
            break;
    }
}