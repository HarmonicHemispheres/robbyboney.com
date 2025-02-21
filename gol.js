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

// Timing variables to control update rate
let lastUpdateTime = 0;
const interval = 100; // Adjust this value to make the simulation slower or faster (milliseconds)

// Animation loop
function animate(timestamp) {
  if (!lastUpdateTime) lastUpdateTime = timestamp;
  const delta = timestamp - lastUpdateTime;

  if (delta > interval) {
    computeNextGeneration();
    drawGrid();
    lastUpdateTime = timestamp;
  }

  requestAnimationFrame(animate);
}

// Handle window resize
window.addEventListener('resize', () => {
  initializeCanvas();
});

// Handle canvas click
canvas.addEventListener('click', handleClick);

function handleClick(event) {
  const x = Math.floor(event.offsetX / cellSize);
  const y = Math.floor(event.offsetY / cellSize);
  const p = 0.2; // Probability to set a cell to alive

  // Define a 5x5 area around the clicked cell
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      const col = (x + i + cols) % cols; // Wrap around edges
      const row = (y + j + rows) % rows; // Wrap around edges
      if (Math.random() < p) {
        currentGrid[col][row] = 1; // Set cell to alive with 20% probability
      }
    }
  }

  drawGrid(); // Immediately redraw to show the new live cells
}

// Initialize and start animation
initializeCanvas();
requestAnimationFrame(animate);