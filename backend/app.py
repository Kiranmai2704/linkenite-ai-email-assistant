# Simple backend to serve emails from CSV
from flask import Flask, jsonify
import pandas as pd
import os

app = Flask(__name__)

# Path to your dataset (adjust if needed)
DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "Sample_Support_Emails_Dataset.csv")

@app.get("/health")
def health():
    return jsonify({"status": "ok"})

@app.get("/emails")
def get_emails():
    try:
        df = pd.read_csv(DATA_PATH)
        emails = df.to_dict(orient="records")  # Convert dataframe → list of dicts
        return jsonify({"emails": emails})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

