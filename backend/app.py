# Placeholder backend (Flask)
from flask import Flask, jsonify

app = Flask(__name__)

@app.get("/health")
def health():
    return jsonify({"status": "ok"})

if __name__ == "__main__":
    # placeholder run
    app.run(debug=True)
