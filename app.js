let mouseX = 0;
let mouseY = 0;

let flashlight = document.getElementById("flashlight");
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    return false;
  }
};

function getMousePosition(e){
    mouseX = !isTouchDevice()? e.pageX : e.touches[0].pageX;
    mouseY = !isTouchDevice()? e.pageY : e.touches[0].pageY;

    flashlight.style.setProperty('--Xpos', mouseX + "px");
    flashlight.style.setProperty('--Ypos', mouseY + "px");
}

// UNCOMMENT IF U WANT TO TRY RECTANGLE VERSION
/**
let flashlight = document.getElementById("flashlight-rectangle");
let text = document.getElementById("text");

function getMousePosition(e) {
  mouseX = !isTouchDevice()
    ? e.clientX - flashlight.clientWidth / 2
    : e.touches[0].clientX - flashlight.clientWidth / 2;
  mouseY = !isTouchDevice()
    ? e.clientY - flashlight.clientHeight / 2
    : e.touches[0].clientY - flashlight.clientHeight / 2;

  flashlight.style.top = mouseY + "px";
  flashlight.style.left = mouseX + "px";
  text.style.left = -mouseX + "px";
  text.style.top = -mouseY + "px";
}
**/

document.addEventListener('mousemove', getMousePosition);
document.addEventListener('touchmove', getMousePosition);