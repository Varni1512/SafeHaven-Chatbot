// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const micButton = document.getElementById('mic-button');

// Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US'; // Set language to English (adjust as needed)

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        userInput.value = transcript; // Display the spoken message in the input field
        userInput.focus(); // Focus on the input field so the user can edit if needed
    };

    recognition.onstart = () => {
        micButton.classList.add('listening');
        userInput.placeholder = 'Listening...';
        userInput.value = ''; // Clear the input field while listening
    };

    recognition.onend = () => {
        micButton.classList.remove('listening');
        userInput.placeholder = 'Type or speak your message...';
        // Do not automatically send the message; wait for user to press send
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        micButton.classList.remove('listening');
        userInput.placeholder = 'Type or speak your message...';
        addMessage('Sorry, I couldn’t understand your voice input. Please try again or type your message.');
    };
} else {
    micButton.style.display = 'none'; // Hide mic button if browser doesn't support SpeechRecognition
    console.warn('Speech Recognition API not supported in this browser.');
}

// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = message.replace(/\n/g, '<br>');
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    indicator.id = 'typing-indicator';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

// Fetch response from Flask server
async function getResponse(query) {
    try {
        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: query })
        });
        const data = await response.json();
        return data.answer || "Sorry, I couldn’t find an answer. Try rephrasing your question about PWDVA!";
    } catch (error) {
        console.error('Error fetching response:', error);
        return "Oops! Something went wrong. Please try again.";
    }
}

// Handle user input (for both typed and voice input)
async function handleUserInput() {
    const message = userInput.value.trim();
    if (!message) return;

    userInput.disabled = true;
    sendButton.disabled = true;
    micButton.disabled = true;
    addMessage(message, true); // Display the user's message in the chat

    showTypingIndicator();
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
    const response = await getResponse(message);
    removeTypingIndicator();
    addMessage(response);

    userInput.value = ''; // Clear the input field after sending
    userInput.disabled = false;
    sendButton.disabled = false;
    micButton.disabled = false;
    userInput.focus();
}

// Handle microphone button click
micButton.addEventListener('click', () => {
    if (recognition && !micButton.classList.contains('listening')) {
        recognition.start();
    }
});

// Event listeners for typing
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !userInput.disabled) handleUserInput();
});