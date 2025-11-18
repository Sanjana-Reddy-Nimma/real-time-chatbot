from flask import Flask, render_template, request, jsonify
import json
import os

app = Flask(__name__)

# Load rules from JSON file
def load_rules():
    rules_path = os.path.join(os.path.dirname(__file__), 'rules.json')
    if os.path.exists(rules_path):
        with open(rules_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

# Chatbot response function
def chatbot_response(user_input):
    rules = load_rules()
    user_input = user_input.lower()
    best_match = None
    max_score = 0

    for intent, data in rules.items():
        score = 0
        keywords = data.get('keywords', [])
        secondary = data.get('secondary', [])
        for word in keywords + secondary:
            if word in user_input:
                score += 1
        if score > max_score:
            max_score = score
            best_match = intent

    if best_match and max_score > 0:
        responses = rules[best_match].get('responses', [])
        return responses[0] if responses else "I don't have information on that topic."
    else:
        # Return random fallback response
        import random
        fallback_responses = rules.get('fallback', {}).get('responses', [])
        return random.choice(fallback_responses) if fallback_responses else "I'm sorry, I don't understand. Can you rephrase your question?"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_input = request.form.get('user_input', '')
    response = chatbot_response(user_input)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
