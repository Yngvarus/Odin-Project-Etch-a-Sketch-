const container = document.getElementById('container');

function handleMouseOver() {
  if (!this.classList.contains('hovered')) {
    this.classList.add('hovered');
    this.style.backgroundColor = 'yellow';
  }
}

// for loop to add 16x16 squares
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  //change background when mouse hover
  square.addEventListener('mouseover', handleMouseOver);

  container.appendChild(square);
}

function changeGrid(){
  let num = prompt("Please enter a number of squares for your grid (between 4 and 100)");
  
}