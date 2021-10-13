// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Hello world 2</h1>`;

import PizzicatoRecorder from 'pizzicato-recorder';
import Pizzicato from 'pizzicato';

PizzicatoRecorder(Pizzicato);

document.addEventListener('click', () => {
  Pizzicato.Recorder.start({ mute: false });

  var sound = new Pizzicato.Sound({ source: 'wave' });
  var sound2 = new Pizzicato.Sound(
    'looperman-l-3531870-0268951-simple-travis-scott-beat.wav',
    function (err) {
      sound2.play();
    }
  );
  sound.play();

  setTimeout(function () {
    sound.stop();
  }, 1000);
  sound.on('stop', function () {
    Pizzicato.Recorder.stop('wav', handleAudio);
  });
});

function handleAudio(file, fileType) {
  let url = URL.createObjectURL(file);
  let hf = document.createElement('a');
  hf.href = url;
  hf.download = 'pizzicato-recorder-rocks.' + fileType;
  hf.innerHTML = hf.download;
  hf.click();
}
