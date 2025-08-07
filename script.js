const cube = document.querySelector('.cube');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 360;
  mouseY = -(e.clientY / window.innerHeight) * 360;
  updateCubeRotation();
});

document.addEventListener('touchmove', (e) => {
  e.preventDefault();
  mouseX = (e.touches[0].clientX / window.innerWidth) * 360;
  mouseY = -(e.touches[0].clientY / window.innerHeight) * 360;
  updateCubeRotation();
}, { passive: false });

function updateCubeRotation() {
  cube.style.transform = `rotateX(${mouseY}deg) rotateY(${mouseX}deg)`;
}
