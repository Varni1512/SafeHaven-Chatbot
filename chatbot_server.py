from flask import Flask, request, jsonify, render_template
import pickle
import re

app = Flask(__name__)

# Load the trained model
with open('pwdva_knn_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Preprocess text
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    return text

# Conversational responses
conversational_responses = {
    'hi': 'Hi! How can I assist you with PWDVA 2005 today?',
    'hii': 'Hello! I’m here to help with questions about the PWDVA 2005. What would you like to know?',
    'hello': 'Hello! I’m your PWDVA 2005 assistant. Ask me anything about the Act!',
    'hey': 'Hey there! What do you want to know about the PWDVA 2005?',
    'bye': 'Goodbye! If you have more questions about PWDVA, I’ll be here!',
    'by': 'Goodbye! If you have more questions about PWDVA, I’ll be here!',
    'thank you': 'You’re welcome! If you have more questions, feel free to ask.',
    'thanks': 'My pleasure! Let me know if you need more help with PWDVA.',
    'how are you': 'I’m doing great, thanks for asking! How can I help you with PWDVA today?'
}

# Serve the HTML interface
@app.route('/')
def index():
    return render_template('index.html')

# Prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    query = preprocess_text(data['query'])
    if not query:
        return jsonify({'answer': 'Please ask a valid question!'})

    # Check for conversational responses first
    if query in conversational_responses:
        return jsonify({'answer': conversational_responses[query]})

    # If not a conversational query, use the KNN model
    answer = model.predict([query])[0]
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)