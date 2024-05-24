const earthContainer = document.querySelector('.earth');
const namesContainer = document.getElementById('namesContainer');

const numNames = 90;
const radius = 150; 


function getPositionOnSphere(index, total) {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;
  return {
    x: radius * Math.cos(theta) * Math.sin(phi),
    y: radius * Math.sin(theta) * Math.sin(phi),
    z: radius * Math.cos(phi)
  };
}


for (let i = 0; i < numNames; i++) {
  const name = document.createElement('span');
  name.textContent = `Bhumiiiii 💓`;
  const { x, y, z } = getPositionOnSphere(i, numNames);
  name.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  namesContainer.appendChild(name);
}
