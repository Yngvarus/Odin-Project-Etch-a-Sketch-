const container = document.getElementById('container');

// for loop to add 16x16 squares
for (let i = 0; i < 256; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  //change background when mouse hover
  square.addEventListener('mouseover', () => {
    square.classList.add('hovered');
  });

  container.appendChild(square);
}