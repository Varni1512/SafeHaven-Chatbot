# PWDVA Chatbot

A chatbot for the **Protection of Women from Domestic Violence Act, 2005**, leveraging a **K-Nearest Neighbors (KNN) model**. This chatbot is available as a **web application**, ensuring accessibility and ease of use.

---

## 🚀 Features

- **Legal Assistance**: Provides instant answers to queries related to the **Protection of Women from Domestic Violence Act, 2005**.
- **KNN-Based Model**: Uses a trained **K-Nearest Neighbors (KNN) model** on `pwdva_data.csv`.
- **Multimodal Support**: Accepts **text and voice input**.
- **Secure & Anonymous**: Ensures privacy for users.
- **Cross-Platform**: Available as a **web app**.
- **Voice Processing**: Supports microphone input for queries.

---

## 🛠️ Setup Guide

### 1️⃣ Prerequisites
Ensure you have **Python 3.8+** installed.

### 2️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 3️⃣ Install FFmpeg (For Voice Processing)
- **Windows**: Download FFmpeg from the [official site](https://ffmpeg.org/) and add it to **PATH**.
- **macOS**: Install via Homebrew:
  ```bash
  brew install ffmpeg
  ```
- **Linux**:
  ```bash
  sudo apt-get install ffmpeg
  ```

### 4️⃣ Add Dataset
Ensure `pwdva_data.csv` is placed in the **root directory**.

### 5️⃣ Train the Model
```bash
python train_model.py
```

### 6️⃣ Run the Web Chatbot
```bash
python chatbot_server.py
```
Access the chatbot at: **[http://localhost:5000](http://localhost:5000)**.

---

## 📂 Project Structure

```
📂 PWDVA-Chatbot/
├── 📁 static/                # Frontend assets (CSS, JS)
│   ├── styles.css            # Styling for web UI
│   ├── script.js             # Frontend chatbot logic
│
├── 📁 templates/             # HTML files
│   ├── index.html            # Main chatbot UI
│
├── train_model.py            # Trains the KNN model
├── chatbot_server.py         # Flask server for web chatbot
├── pwdva_data.csv            # Dataset for training
├── pwdva_knn_model.pkl       # Trained KNN model
├── requirements.txt          # Required dependencies
└── README.md                 # Project documentation
```

---

## 📝 License
This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Feel free to **fork** this repository, submit **issues**, or create **pull requests**.

---

## 📬 Contact
For any queries or suggestions, feel free to **open an issue**.

**🚀 Let's make legal assistance more accessible!**

