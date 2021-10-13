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
