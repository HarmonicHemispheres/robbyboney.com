// gol.js

const canvas = document.getElementById('gameOfLifeCanvas');
const ctx = canvas.getContext('2d');

let width, height;
const cellSize = 10; // Size of each cell in pixels
let cols, rows;
let currentGrid, nextGrid;

// Define a palette of colors with opacity for live cells
const colors = [
  'rgba(45, 45, 45, 0.2)',    // Charcoal
  'rgba(255, 99, 71, 0.2)',   // Tomato
  'rgba(30, 144, 255, 0.2)',  // DodgerBlue
  'rgba(34, 139, 34, 0.2)',   // ForestGreen
  'rgba(238, 130, 238, 0.2)', // Violet
  'rgba(255, 215, 0, 0.2)'    // Gold
];

// Initialize the canvas size
function initializeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  cols = Math.floor(width / cellSize);
  rows = Math.floor(height / cellSize);

  // Initialize grids
  currentGrid = createGrid();
  nextGrid = createGrid();

  // Randomly populate the current grid
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      currentGrid[x][y] = Math.random() < 0.2 ? 1 : 0; // 20% chance to be alive
    }
  }
}

// Create a 2D array
function createGrid() {
  let grid = new Array(cols);
  for (let x = 0; x < cols; x++) {
    grid[x] = new Array(rows).fill(0);
  }
  return grid;
}

// Draw the grid on the canvas
function drawGrid() {
  ctx.fillStyle = '#ffffff'; // Background color
  ctx.fillRect(0, 0, width, height);

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (currentGrid[x][y] === 1) {
        // Choose color based on position to get varied colors
        const colorIndex = (x + y) % colors.length;
        ctx.fillStyle = colors[colorIndex];
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

// Compute the next generation
function computeNextGeneration() {
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;

      // Count live neighbors
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          let col = (x + i + cols) % cols;
          let row = (y + j + rows) % rows;
          neighbors += currentGrid[col][row];
        }
      }

      // Apply Game of Life rules
      if (currentGrid[x][y] === 1) {
        if (neighbors < 2 || neighbors > 3) {
          nextGrid[x][y] = 0; // Die
        } else {
          nextGrid[x][y] = 1; // Stay alive
        }
      } else {
        if (neighbors === 3) {
          nextGrid[x][y] = 1; // Become alive
        } else {
          nextGrid[x][y] = 0; // Stay dead
        }
      }
    }
  }

  // Swap grids
  [currentGrid, nextGrid] = [nextGrid, currentGrid];
}

// Animation loop
function animate() {
  computeNextGeneration();
  drawGrid();
  requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
  initializeCanvas();
});

// Initialize and start animation
initializeCanvas();
animate();
