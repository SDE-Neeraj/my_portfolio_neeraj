const text = "Hi, I'm Neeraj Singh. Software Developer.";
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust speed by changing this value
    }
}

// Start typing effect after a short delay
setTimeout(type, 100); // Adjust the start delay as needed
