//your JS code here. If required.
// ✅ List of sound names (must match your file names inside sounds/ folder)
const sounds = ['clap', 'kick', 'snare', 'tom', 'tink'];

// Get the buttons container
const buttonsDiv = document.getElementById('buttons');

// Create a button for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = sound;

  // On click, stop all sounds then play selected one
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = new Audio(`./sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsDiv.appendChild(btn);
});

// Create Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.textContent = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsDiv.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(a => {
    a.pause();
    a.currentTime = 0;
  });
}
