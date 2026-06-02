// Get DOM elements
const messageElement = document.getElementById('message');
const greetBtn = document.getElementById('btn-greet');
const colorBtn = document.getElementById('btn-colors');
const resetBtn = document.getElementById('btn-reset');
const body = document.body;

// Array of greetings
const greetings = [
    "👋 Hello! Welcome to my project!",
    "😊 Great to see you here!",
    "🎉 You're awesome!",
    "💫 Let's build something amazing!",
    "🚀 Ready to explore?",
    "⭐ You're doing great!",
    "🌟 Keep creating!",
    "💪 Never stop learning!"
];

// Color gradients
const colorGradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #feca57 50%, #ff9ff3 75%, #fd79a8 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 25%, #43e97b 50%, #38f9d7 75%, #fa709a 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 25%, #30cfd0 50%, #330867 75%, #30cfd0 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 25%, #ff9ff3 50%, #feca57 75%, #48dbfb 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 25%, #ff9ff3 50%, #54a0ff 75%, #48dbfb 100%)',
];

let currentColorIndex = 0;

// Greet button functionality
greetBtn.addEventListener('click', () => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    messageElement.textContent = randomGreeting;
    animateMessage();
});

// Color button functionality
colorBtn.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % colorGradients.length;
    body.style.background = colorGradients[currentColorIndex];
    body.style.backgroundSize = '400% 400%';
    body.style.animation = 'gradientShift 15s ease infinite';
    messageElement.textContent = '🎨 Color changed!';
    animateMessage();
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    currentColorIndex = 0;
    body.style.background = colorGradients[0];
    messageElement.textContent = '✨ Reset to default!';
    animateMessage();
});

// Animation function
function animateMessage() {
    messageElement.style.animation = 'none';
    setTimeout(() => {
        messageElement.style.animation = 'pulse 0.6s ease';
    }, 10);
}

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.05);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Initial greeting
window.addEventListener('load', () => {
    messageElement.textContent = '👋 Click a button to get started!';
});
