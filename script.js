const sounds = ['clap', 'kick', 'snare', 'tom', 'tink'];
const buttons = document.getElementById('buttons');

let currentAudio = null;

// create buttons dynamically
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  // create an audio element for each sound
  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;
  document.body.appendChild(audio);

  btn.addEventListener('click', () => {
    stopSounds();
    currentAudio = audio;
    audio.play().catch(() => {});
  });

  buttons.appendChild(btn);
});

// stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.textContent = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttons.appendChild(stopBtn);

function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
