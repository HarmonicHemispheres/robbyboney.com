// script.js
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const simplex = new SimplexNoise();
let time = 0;
let speed = 0.0005; // Default speed
const normalSpeed = 0.0005;
const hoverSpeed = 0.002; // Increased speed on hover

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

canvas.addEventListener('mouseenter', () => {
    speed = hoverSpeed;
});

canvas.addEventListener('mouseleave', () => {
    speed = normalSpeed;
});

function animate() {
    const imageData = ctx.createImageData(width, height);
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            const value = simplex.noise3D(x * 0.005, y * 0.005, time);
            // Lighter colors
            const r = Math.floor(200 + 55 * Math.sin(value * Math.PI));
            const g = Math.floor(200 + 55 * Math.sin((value + 0.33) * Math.PI));
            const b = Math.floor(200 + 55 * Math.sin((value + 0.66) * Math.PI));
            const index = (x + y * width) * 4;
            imageData.data[index] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = 150;
        }
    }
    ctx.putImageData(imageData, 0, 0);
    time += speed;
    requestAnimationFrame(animate);
}
animate();

function navigate(section) {
    alert(`Navigating to ${section}`);
}
