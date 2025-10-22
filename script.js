const sounds = ['clap', 'kick', 'snare', 'tom', 'tink'];
const buttonsDiv = document.getElementById('buttons');

// Store audio elements for later control
const audios = {};

// Preload all audio elements into DOM
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `./sounds/${sound}.mp3`;
  audio.preload = 'auto'; // ensures it loads before playback
  document.body.appendChild(audio);
  audios[sound] = audio;
});

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  btn.addEventListener('click', () => {
    stopAllSounds();
    audios[sound].play().catch(err => console.log(err));
  });

  buttonsDiv.appendChild(btn);
});

// Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.textContent = 'Stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsDiv.appendChild(stopBtn);

// Function to stop all sounds
function stopAllSounds() {
  Object.values(audios).forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
