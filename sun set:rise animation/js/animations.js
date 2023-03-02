
window.onload = () => {
  document.getElementById("button").onclick = () => {
    var sun = document.getElementById("sun");
    var sky = document.getElementById("sky");
    if (sun.style.animationPlayState == 'paused') {
      sun.style.animationPlayState = 'running';
    }
    else {
      sun.style.animationPlayState = 'paused';
    }
    if (sky.style.animationPlayState == 'paused') {
      sky.style.animationPlayState = 'running';
    }
    else {
      sky.style.animationPlayState = 'paused';
    }
  }
}