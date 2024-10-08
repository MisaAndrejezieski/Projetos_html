const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');

// Resize the canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const bubbles = [];

function randomNeonColor() {
    const colors = ['#1c9cbd', '#8abe56','#f7ce46','#4256a1','#3c57a6','#da3832','#ec248f','#bd6700','#a29e5e','#ebf2dd','#ffffff','#cd760c','#efeed4','#e3e1bf','#69ccff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createBubble() {
    const bubble = {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 5 + 2,
        speed: Math.random() * 1 + 0.5,
        oscillationAmplitude: Math.random() * 20 + 10,
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        offset: Math.random() * Math.PI * 2,
        color: randomNeonColor()
    };
    bubbles.push(bubble);
}

function drawBubble(bubble) {
    ctx.beginPath();
    const oscillation = Math.sin(bubble.y * bubble.oscillationSpeed + bubble.offset) * bubble.oscillationAmplitude;
    ctx.arc(bubble.x + oscillation, bubble.y, bubble.radius, 0, Math.PI * 2);
    ctx.fillStyle = bubble.color;
    ctx.fill();
    ctx.closePath();
}

function updateBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bubbles.length; i++) {
        const bubble = bubbles[i];
        bubble.y -= bubble.speed;

        if (bubble.y + bubble.radius < 0) {
            // Remove bubbles that have moved off the top of the screen
            bubbles.splice(i, 1);
            i--;
        } else {
            drawBubble(bubble);
        }
    }

    // Add more bubbles each frame
    for (let i = 0; i < 5; i++) {
        createBubble();
    }

    requestAnimationFrame(updateBubbles);
    console.log(bubbles.length)
}

// Start the animation
updateBubbles();



document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;

    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    const gallery = document.getElementById('newsGallery');
    gallery.appendChild(newsItem);

    // Limpar o formulário
    document.getElementById('newsForm').reset();
});
