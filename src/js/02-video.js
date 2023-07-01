import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onPlay(data) {
    console.log("timeupdate: ", data);
}
