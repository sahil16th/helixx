var w, h, loopId, id, canvas, ctx, particles;

var options = {
    particleColor: "rgba(255,255,255)",
    lineColor: "rgba(0,181,255)",
    particleAmount: 10,
    defaultRadius: 1,
    variantRadius: 2,
    defaultSpeed: 1,
    variantSpeed: 1,
    linkRadius: 300
};

var rgb = options.lineColor.match(/\d+/g);

document.addEventListener("DOMContentLoaded", init);

function init() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    resizeReset();
    initialiseElements();
    startAnimation();
}

function resizeReset() {
    w = canvas.width = window.innerHeight;
    h = canvas.height = window.innerHeight;
}

function initialiseElements() {
    particles = [];
    for (var i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
    }
}

function startAnimation() {
    loopId = requestAnimationFrame(animationLoop);
}

function animationLoop() {
    ctx.clearRect(0,0,w,h);
    drawScene();

    id = requestAnimationFrame(animationLoop);
}

function drawScene() {
    drawLine();
    drawParticle();
}

function drawParticle() {
    for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
}

function drawLine() {
    for (var i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
    }
}

function linkPoints(point, hubs) {
    for (var i = 0; i < hubs.length; i++) {
        var distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
        var opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+opacity+')';
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(hubs[i].x, hubs[i].y);
            ctx.closePath();
            ctx.stroke();
        }
    }
}

function checkDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

Particle = function() {
    var _this = this;

    _this.x = Math.random() * w;
    _this.y = Math.random() * h;
    _this.color = options.particleColor;
    _this.radius = options.defaultRadius + Math.random() * options.variantRadius;
    _this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
    _this.directionAngle = Math.floor(Math.random() * 360);
    _this.vector = {
        x: Math.cos(_this.directionAngle) * _this.speed,
        y: Math.sin(_this.directionAngle) * _this.speed
    }

    _this.update = function() {
        _this.border();
        _this.x += _this.vector.x;
        _this.y += _this.vector.y;
    }

    _this.border = function() {
        if (_this.x >= w || _this.x <= 0) {
            _this.vector.x *= -1;
        }
        if (_this.y >= h || _this.y <= 0) {
            _this.vector.y *= -1;
        }
        if (_this.x > w) _this.x = w;
        if (_this.y > h) _this.y = h;
        if (_this.x < 0) _this.x = 0;
        if (_this.y < 0) _this.y = 0;
    }

    _this.draw = function() {
        ctx.beginPath();
        ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = _this.color;
        ctx.fill();
    }
}










document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });














//   image change







// const bgVideo = document.getElementById('bgvideo');
// const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
// let currentIndex = 0;

// function changeImage(index) {
//   bgVideo.style.opacity = 0; // Fade out the current image
//   setTimeout(() => {
//     bgVideo.src = images[index];
//     bgVideo.style.opacity = 1; // Fade in the new image
//     currentIndex = index;

//     // Update active anchor tag and its text color
//     document.querySelectorAll('.scrolltab a').forEach((link, i) => {
//       if (i === index) {
//         link.classList.add('active');
//         link.style.color = 'blue'; // Change the color to red (or any other color)
//       } else {
//         link.classList.remove('active');
//         link.style.color = ''; // Reset the color to default
//       }
//     });
//   }, 500); // Adjust the timing to match the transition duration
// }

// // Change image every 5 seconds
// const intervalId = setInterval(() => {
//   currentIndex = (currentIndex + 1) % images.length;
//   changeImage(currentIndex);
// }, 5000);

// // Initial image change
// changeImage(currentIndex);

// // Function to handle anchor tag clicks
// function handleLinkClick(event, index) {
//   event.preventDefault(); // Prevent default anchor tag behavior (e.g., scrolling to top of page)
//   clearInterval(intervalId); // Stop automatic image change
//   changeImage(index); // Change to the selected image
// }

// // Attach event listeners to anchor tags
// for (let i = 0; i < images.length; i++) {
//   document.getElementById('link' + (i + 1)).addEventListener('click', (event) => handleLinkClick(event, i));
// }




const bgVideo = document.getElementById('bgvideo');
const images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
let currentIndex = 0;

function changeImage(index) {
  bgVideo.style.opacity = 0; // Fade out the current image
  setTimeout(() => {
    bgVideo.src = images[index];
    bgVideo.style.opacity = 1; // Fade in the new image
    currentIndex = index;

    // Update active anchor tag and its text color
    document.querySelectorAll('.scrolltab a').forEach((link, i) => {
      if (i === index) {
        link.classList.add('active');
        link.style.color = '#007bff'; // Change the color to red (or any other color)
        // Display elem2 div when the anchor tag corresponding to image 2 is active


        if (index === 0) {
            document.getElementById('txttttt').style.display = 'block';
            document.getElementById('btnss').style.display = 'flex';
            document.getElementById('elem2').style.display = 'none';
            document.getElementById('elem3').style.display = 'none';
            document.getElementById('elem4').style.display = 'none';
          } else if (index === 1) {
            document.getElementById('txttttt').style.display = 'none';
            document.getElementById('btnss').style.display = 'none';
            document.getElementById('elem2').style.display = 'block';
            document.getElementById('elem3').style.display = 'none';
            document.getElementById('elem4').style.display = 'none';
          } else if (index === 2) {
            document.getElementById('txttttt').style.display = 'none';
            document.getElementById('btnss').style.display = 'none';
            document.getElementById('elem2').style.display = 'none';
            document.getElementById('elem3').style.display = 'block';
            document.getElementById('elem4').style.display = 'none';
          } else if (index === 3) {
            document.getElementById('txttttt').style.display = 'none';
            document.getElementById('btnss').style.display = 'none';
            document.getElementById('elem2').style.display = 'none';
            document.getElementById('elem3').style.display = 'none';
            document.getElementById('elem4').style.display = 'block';
          }

        

        
      } else {
        link.classList.remove('active');
        link.style.color = ''; // Reset the color to default
      }
    });
  }, 500); // Adjust the timing to match the transition duration
}

// Change image every 5 seconds
const intervalId = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  changeImage(currentIndex);
}, 5000);

// Initial image change
changeImage(currentIndex);

// Function to handle anchor tag clicks
function handleLinkClick(event, index) {
  event.preventDefault(); // Prevent default anchor tag behavior (e.g., scrolling to top of page)
  clearInterval(intervalId); // Stop automatic image change
  document.querySelectorAll('.scrolltab a').forEach(link => {
    link.classList.remove('active'); // Remove 'active' class from all anchor tags
    link.style.color = ''; // Reset the color to default
  });
  changeImage(index); // Change to the selected image
}

// Attach event listeners to anchor tags
for (let i = 0; i < images.length; i++) {
  document.getElementById('link' + (i + 1)).addEventListener('click', (event) => handleLinkClick(event, i));
}
