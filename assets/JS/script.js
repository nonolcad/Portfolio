let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  document.body.style.setProperty('--x', currentX + 'px');
  document.body.style.setProperty('--y', currentY + 'px');
  requestAnimationFrame(animate);
}
animate();
