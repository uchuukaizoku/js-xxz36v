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
  var sound = new Pizzicato.Sound('bird.wav', function (err) {
    if (err) return console.error(err);
    sound.play();
    sound.on('end', function () {
      Pizzicato.Recorder.stop('wav', handleAudio);
    });
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
