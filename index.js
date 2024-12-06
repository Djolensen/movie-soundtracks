var buttonArray = document.querySelectorAll(".drum");
var activeAudio = null;

for (var i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function (event) {
    var buttonInnerHTML = this.innerHTML;
    keyPressed(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.querySelector(".stop").addEventListener("click", function () {
  activeAudio.pause();
});

document.addEventListener("keydown", function (event) {
  keyPressed(event.key);
  buttonAnimation(event.key);
});

function keyPressed(key) {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }

  switch (key) {
    case "w":
      activeAudio = new Audio("sounds/gladiator.mp3");
      break;
    case "a":
      activeAudio = new Audio("sounds/interstellar.mp3");
      break;
    case "s":
      activeAudio = new Audio("sounds/inception.mp3");
      break;
    case "d":
      activeAudio = new Audio("sounds/tdk.mp3");
      break;
    case "j":
      activeAudio = new Audio("sounds/joker.mp3");
      break;
    case "k":
      activeAudio = new Audio("sounds/lotr.mp3");
      break;
    case "l":
      activeAudio = new Audio("sounds/hp.mp3");
      break;
    default:
      console.log(key);
      return;
  }

  activeAudio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
