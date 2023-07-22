var switchElement = document.getElementById('switch');
var isOn = false;
var intervalId;
var currentPattern = 0;
var patterns = [
  { speed: 800, blackout: false },
  { speed: 400, blackout: false },
  { speed: 200, blackout: false },
  { speed: 0, blackout: true }
];

switchElement.addEventListener('click', function () {
  isOn = !isOn;
  switchElement.classList.toggle('on');

  if (isOn) {
    startDiscoLight();
  } else {
    stopDiscoLight();
  }
});

function startDiscoLight() {
  currentPattern = 0;
  intervalId = setInterval(changeColor, patterns[currentPattern].speed);
}

function changeColor() {
  document.body.style.backgroundColor = patterns[currentPattern].blackout ? 'black' : getRandomColor();
  currentPattern = (currentPattern + 1) % patterns.length;
  clearInterval(intervalId);
  intervalId = setInterval(changeColor, patterns[currentPattern].speed);
}

function stopDiscoLight() {
  clearInterval(intervalId);
  document.body.style.backgroundColor = 'black';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
