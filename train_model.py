import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
import re
import pickle
import json

# Load CSV
data = pd.read_csv("pwdva_data.csv")

# Preprocess text
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
    return text

data['Question'] = data['Question'].apply(preprocess_text)

# Features and labels
X = data['Question']
y = data['Answer']

# Train KNN model
model = make_pipeline(
    TfidfVectorizer(),
    KNeighborsClassifier(n_neighbors=5, weights='distance')
)
model.fit(X, y)

# Save the model
with open('pwdva_knn_model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Optional: Save as JSON for client-side fallback
json_data = data[['Question', 'Answer']].to_dict(orient='records')
with open('static/pwdva_data.json', 'w') as f:
    json.dump(json_data, f)

print("Model trained and saved as 'pwdva_knn_model.pkl'. JSON saved as 'static/pwdva_data.json'.")