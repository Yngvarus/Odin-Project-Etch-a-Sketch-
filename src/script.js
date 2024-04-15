const container = document.getElementById('container');

const containerWidth = container.clientWidth; 
const containerHeight = container.clientHeight;

function randomColor(){
  let randomRed = Math.floor(Math.random() * 256);
  let randomGreen = Math.floor(Math.random() * 256);
  let randomBlue = Math.floor(Math.random() * 256);
  return {r: randomRed, g: randomGreen, b: randomBlue};
}

function darkenColor(r, g, b, factor) {
  let newR = Math.max(0, Math.floor(r * (1 - factor)));
  let newG = Math.max(0, Math.floor(g * (1 - factor)));
  let newB = Math.max(0, Math.floor(b * (1 - factor)));
  return { r: newR, g: newG, b: newB };
}

function handleMouseOver() {
  let currentValue = parseInt(this.getAttribute('data-value'));

  if(currentValue <= 10){
    this.classList.add('hovered');    
    let randCol = randomColor();
    this.style.backgroundColor = `rgb(${randCol.r}, ${randCol.g}, ${randCol.b})`;

    let darkeningFactor = currentValue * 0.1; // 10% darker every iteration
    let newColor = darkenColor(randCol.r, randCol.g, randCol.b, darkeningFactor);
    this.style.backgroundColor = `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
    currentValue++;
    this.setAttribute('data-value', currentValue);

  } else{ //stop changing background at the tenth iteration
    this.removeEventListener('mouseover', handleMouseOver); // Removes the listener
    this.classList.remove('hovered');
    this.style.backgroundColor = 'black';
  }
  
}

function clearGrid(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGrid(num){
  let n = num * num;
  let squareWidth = containerWidth / num;
  let squareHeight = containerHeight / num;

  for (let i = 0; i < n; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    //interaction count
    square.setAttribute('data-value', 0);

    //change background when mouse hover
    square.addEventListener('mouseover', handleMouseOver);
  
    container.appendChild(square);
    square.style.width = squareWidth + 'px';
    square.style.height = squareHeight + 'px';
  }
}

function changeGrid(){
  let num;
  do {
    num = prompt("Please enter a number of squares for your grid (between 1 and 100)");
  } while (isNaN(num) || num < 1 || num > 100);
  
  clearGrid();
  createGrid(num);
}

//listener to add 
document.addEventListener('DOMContentLoaded', () => {
  createGrid(16);
});