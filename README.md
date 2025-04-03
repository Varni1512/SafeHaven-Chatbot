# PWDVA Chatbot

A chatbot for the Protection of Women from Domestic Violence Act, 2005, using a KNN model. Available as a web app and a Telegram bot.

## Setup
1. Install Python 3.8+.
2. Install dependencies: `pip install -r requirements.txt`.
3. Install FFmpeg for voice processing (required for Telegram bot):
   - On Windows: Download from FFmpeg website and add to PATH.
   - On macOS: `brew install ffmpeg`.
   - On Linux: `sudo apt-get install ffmpeg`.
4. Place `pwdva_data.csv` in the root directory.
5. Train the model: `python train_model.py`.
6. Run the Flask server: `python chatbot_server.py`.
7. Run the Telegram bot:
   - Get a bot token from BotFather on Telegram.
   - Replace `YOUR_TELEGRAM_BOT_TOKEN` in `telegram_bot.py` with your token.
   - Run `python telegram_bot.py`.
8. Access the web app at `http://localhost:5000` or search for your bot on Telegram.

## Features
- Handles PWDVA-related questions using a KNN model trained on `pwdva_data.csv`.
- Supports voice input via the microphone button (web) or voice messages (Telegram).
- Telegram bot allows anonymous, secure interaction with no digital trace.

## Files
- `static/styles.css`: Chatbot styling (web).
- `static/script.js`: Frontend logic (web).
- `static/pwdva_data.json`: Optional JSON dataset.
- `templates/index.html`: Chatbot interface (web).
- `train_model.py`: Trains the KNN model.
- `chatbot_server.py`: Flask server with conversational responses.
- `telegram_bot.py`: Telegram bot script.
- `pwdva_knn_model.pkl`: Trained model.