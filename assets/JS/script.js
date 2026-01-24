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


const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateSlider() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});