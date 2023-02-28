const canvas = document.querySelector(".canvas");
const btnSize = document.querySelector(".size-btn");
const enterSize = document.querySelector(".size-input");
const colorPicker = document.querySelector(".color-picker").value;
const randomColBtn = document.querySelector(".random");
const eraseCanvas = document.querySelector(".erase");
let color = "black";
let colorStatus = "single";

//Click Enter for size
btnSize.addEventListener("click", () => {
  erase();
  let sizeValue = enterSize.value;
  return makeGrid(sizeValue);
});

//Press Enter for size
enterSize.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    btnSize.click();
  }
});

//Color Picker
document.querySelector(".color-picker").onchange = function () {
  colorStatus = "single";
  color = this.value;
  console.log(color);
};

//Random Color
randomColBtn.addEventListener("click", () => {
  colorStatus = "random";
});

//Erase button
eraseCanvas.addEventListener("click", () => {
  return erase();
});

//Set grid size
function gridSize() {
  let size = document.querySelector(".size-input");
  return makeGrid(size);
}

//Make the grid
function makeGrid(size) {
  if (size >= 2 && size <= 50) {
    const squareSize = 500 / size;
    for (let col = 0; col < size; col++) {
      for (let row = 0; row < size; row++) {
        const square = document.createElement("div"); //create div and put it in variable square
        square.classList.add("square"); // add css class to div
        square.style.width = squareSize + "px"; //set width of div relative to size of square.
        square.style.height = squareSize + "px"; //set height of div relative to size of square.
        square.style.outline = squareSize / 100 + "px solid white"; // set border of div.
        canvas.appendChild(square); // append each div to the container.
        square.style.backgroundColor = "white";
        square.addEventListener("mouseover", colorSquare);
      }
    }
  } else {
    alert("Choose a size from 2 to 50 please.");
  }
}

//Color Square
function colorSquare() {
  if (colorStatus === "random") {
    this.style.backgroundColor = randomColor();
  } else {
    this.style.backgroundColor = color;
  }
}

//Random color function
function randomColor() {
  let chars = "0123456789ABCDEF";
  let randColor = "#";
  for (let i = 0; i < 6; i++) {
    randColor += chars[Math.floor(Math.random() * 16)];
  }
  // console.log(randColor);
  return (color = randColor);
}

//Erase the grid
function erase() {
  canvas.innerHTML = "";
}
