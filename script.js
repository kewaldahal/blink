var switchElement = document.getElementById('switch');
var isOn = false;
var colors = ['red', 'green', 'blue','pink','purple','yellow','sky','orange'];
var currentColor = 0;

switchElement.addEventListener('click', function() {
  isOn = !isOn;
  switchElement.classList.toggle('on');

  if (isOn) {
    startDiscoLight();
  } else {
    stopDiscoLight();
  }
});

function startDiscoLight() {
  currentColor = 0;
  document.body.style.backgroundColor = colors[currentColor];
  setInterval(changeColor, 500);
}

function changeColor() {
  currentColor = (currentColor + 1) % colors.length;
  document.body.style.backgroundColor = colors[currentColor];
}

function stopDiscoLight() {
  clearInterval(changeColor);
}
