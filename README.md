# SafeHaven Chatbot 🤝
 
*Empowering Women with Knowledge and Support under the PWDVA 2005*

## Project Overview

SafeHaven is a final year project developed to raise awareness about the **Protection of Women from Domestic Violence Act, 2005 (PWDVA)** in India. This AI-powered chatbot provides a safe, anonymous, and accessible platform for users to learn about their rights, understand legal provisions, and seek guidance on domestic violence issues. SafeHaven supports both text and voice inputs, ensuring inclusivity for users with different needs. The chatbot leverages a K-Nearest Neighbors (KNN) model to answer PWDVA-related queries and offers empathetic conversational responses to create a supportive user experience.

This project was developed as part of a final year academic requirement, showcasing the application of machine learning, natural language processing (NLP), and web development to address real-world social issues.

## Features

- **PWDVA Information**: Answers queries about the PWDVA 2005 using a trained KNN model (e.g., "What is a protection order?").
- **Voice and Text Input**: Supports both text and voice inputs via the Web Speech API for accessibility.
- **Conversational Responses**: Handles greetings and casual queries (e.g., "Hi" → "Hello! How can I assist you with PWDVA today?").
- **Anonymous and Secure**: Ensures user privacy by not storing personal data, with HTTPS for secure communication.
- **User-Friendly Interface**: A clean, responsive web app interface with a SafeHaven favicon for branding.
- **Empathetic Tone**: Designed to be supportive and empathetic, considering the emotional state of users.

## Getting Started

Follow these steps to set up and run the SafeHaven chatbot on your local machine.

### Prerequisites

- **Python 3.8+**: Ensure Python is installed on your system.
- **Git**: For cloning the repository.
- **Web Browser**: Chrome or Edge (for Web Speech API support).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/safehaven-chatbot.git
   cd safehaven-chatbot
   
2. **Set Up a Virtual Environment (Recommended)**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   
3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   
4. **Prepare the Dataset**:
   Place the pwdva_data.csv file (containing 700 rows of PWDVA questions and answers) in the 
   root directory.

5. **Train the Model**:
   Run the training script to generate the KNN model:
   ```bash
   python train_model.py
   ```
   - This creates pwdva_knn_model.pkl in the root directory.

6. **Add the Favicon (Optional)**:
   - Place safehaven_icon.ico in the static folder to set the favicon for the web app.

### Running the Chatbot

1. **Start the Flask Server**:
   ```bash
   python chatbot_server.py
   ```
   
   - The server will run on http://localhost:5000.

2. **Access the Web App**:
   - Open your browser and navigate to http://localhost:5000.
   - You’ll see the SafeHaven chatbot interface with a welcome message.

### Usage
1. **Interact with the Chatbot**:
   - Type a question (e.g., "What is a protection order?") or click the microphone button to speak.
   - Press the "Send" button or hit Enter to submit your query.
   - The chatbot will respond with an answer or a conversational reply.

2. **Example Interactions**:
   - **User**: "What is a protection order?"
      - **SafeHaven**: "A protection order under Section 18 of the PWDVA restrains the respondent from committing violence."

  - **User (Voice)**: "What is domestic violence?"
     - **SafeHaven**: "Domestic violence under the PWDVA includes physical, emotional, sexual, verbal, or economic abuse."

3. **Troubleshooting**:
   - If the server doesn’t start, check for port conflicts on 5000:
  ```bash
    netstat -aon | findstr :5000  # On Windows
    lsof -i :5000  # On macOS/Linux
  ```
  - Ensure all dependencies are installed and the pwdva_knn_model.pkl file exists.

### Contributing
Contributions are welcome! If you’d like to improve SafeHaven, please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature.
3. Make your changes and commit: git commit -m "Add your feature".
4. Push to your branch: git push origin feature/your-feature.
5. Open a pull request.


💖 Built with care for a safer tomorrow.














