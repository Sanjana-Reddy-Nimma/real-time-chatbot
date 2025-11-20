# 🌿 Seasonal Immunity & Health Chatbot

### 🩺 A Rule-Based AI Chat Assistant for Preventive Healthcare

This project is a **Flask-based rule-driven health chatbot** that provides **verified**, **short**, and **medically reliable** responses about:

✔ Seasonal illness symptoms
✔ Immunity-boosting tips
✔ Prevention & hygiene
✔ Home remedies
✔ Lifestyle guidance
✔ Vaccination awareness
✔ Doctor consultation alerts

All responses are taken from trusted global health sources like **WHO**, **CDC**, and **Indian Health Ministry** guidelines.


# 📌 Project Overview

This chatbot acts as a **quick digital health assistant** during seasonal outbreaks like flu, dengue, cold, viral fever, allergies, etc.

The bot uses a **rule-based NLP engine** with:

* Keyword matching
* Secondary keyword scoring
* Best-intent selection
* Fallback responses
* Verified short answers

The frontend is fully static (HTML/CSS/JS) and deployed on **GitHub Pages**, while the backend Flask API runs on **Render**, connected via CORS-enabled API calls.


# 🧠 Features

### ✔️ **Smart Intent Detection**

Uses keyword + secondary scoring to detect the most relevant intent.

### ✔️ **Reliable, Verified Responses**

All answers are:

* medically correct
* short & simple
* from trusted sources

### ✔️ **Fast & Lightweight**

No ML models needed — works using rules.json for instant responses.

### ✔️ **Modern UI**

Built with:

* Clean HTML
* Responsive CSS
* JavaScript chat animations

### ✔️ **Cross-Platform Deployment**

* Backend API → Render
* Frontend → GitHub Pages


# 🏗️ Tech Stack

### **Frontend**

* HTML
* CSS
* JavaScript (Vanilla)

### **Backend**

* Python
* Flask
* flask-cors
* Gunicorn (for Render deployment)

### **Deployment**

* GitHub Pages
* Render Web Service



# 📁 Project Structure

```
/static
    ├── styles.css
    ├── script.js
/templates   (backend only)
    ├── index.html
    ├── chat.html
app.py              # Flask backend
rules.json          # NLP rules engine
requirements.txt
Procfile
README.md
```

# ⚙️ How It Works

### 1️⃣ User enters a health-related query

### 2️⃣ script.js sends the query → Flask backend using fetch()

### 3️⃣ Flask checks:

* primary keywords
* secondary keywords
* match score

### 4️⃣ Flask returns the best response

If no match → fallback intent is triggered.

### 5️⃣ Browser displays the answer in chat UI


# 🧪 Running Locally

### Install dependencies:
```
pip install -r requirements.txt
```

### Run Flask app:
```
python app.py
```

Visit:
```
http://127.0.0.1:5000
```

# 🌐 Deployment Guide

### **Backend on Render**

* Create `requirements.txt`
* Add `Procfile`
* Enable CORS
* Deploy as Web Service

### **Frontend on GitHub Pages**

* Upload static files
* Ensure paths are relative
* Update fetch() with Render URL

# 📌 Future Enhancements

* Add ML/NLP intent classification
* Add symptom-based risk scoring
* Add multilingual support
* Add voice input
* Add chatbot analytics dashboard


# ⭐ Acknowledgements

Medical guidelines sourced from:

* World Health Organization (WHO)
* Centers for Disease Control and Prevention (CDC)
* Indian Ministry of Health & Family Welfare (MoHFW)
