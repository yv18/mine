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
  name.textContent = `VIRATTT 💓`;
  const { x, y, z } = getPositionOnSphere(i, numNames);
  name.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  namesContainer.appendChild(name);
}

document.getElementById('video').play();


const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');

        video.addEventListener('loadeddata', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            requestAnimationFrame(drawFrame);
        });

        function drawFrame() {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            let frame = context.getImageData(0, 0, canvas.width, canvas.height);
            let length = frame.data.length / 4;

            for (let i = 0; i < length; i++) {
                let r = frame.data[i * 4];
                let g = frame.data[i * 4 + 1];
                let b = frame.data[i * 4 + 2];
                
                // If the pixel color is green (you can adjust the threshold for better results)
                if (g > 100 && r < 100 && b < 100) {
                    frame.data[i * 4 + 3] = 0; // Set alpha to 0 (transparent)
                }
            }
            context.putImageData(frame, 0, 0);
            requestAnimationFrame(drawFrame);
        }


      
