# 😊 Sentiment Analysis Web Application

An end-to-end AI-powered Sentiment Analysis Web Application built using Machine Learning, FastAPI, and a responsive HTML/CSS/JavaScript frontend. The application analyzes user-entered text and predicts whether the sentiment is **Positive**, **Neutral**, or **Negative**.

---

## 📌 Project Overview

This project demonstrates the complete Machine Learning workflow:

- Data Collection
- Data Cleaning
- Text Preprocessing
- Feature Engineering (TF-IDF)
- Model Training
- Model Evaluation
- Model Serialization
- FastAPI Backend Development
- Frontend Development
- Frontend & Backend Integration
- Testing
- Deployment

The trained Machine Learning model is exposed through a FastAPI REST API and connected to a user-friendly web interface.

---

## 🎯 Features

- Predicts sentiment of any English text
- Classifies text into:
  - 😊 Positive
  - 😐 Neutral
  - 😞 Negative
- Machine Learning model trained from scratch
- FastAPI REST API
- Interactive web interface
- Handles empty input validation
- Responsive frontend design

---

## 🛠️ Technologies Used

### Programming Language

- Python

### Machine Learning & NLP

- Pandas
- NumPy
- Scikit-learn
- NLTK

### Backend

- FastAPI
- Uvicorn

### Frontend

- HTML5
- CSS3
- JavaScript (Fetch API)

### Version Control

- Git
- GitHub

---
## 🌐 Live Demo

Live Application:

https://vercel.com/ayesha-imran/sentiment-analysis-web-app

## 📂 Project Structure

```text
Sentiment-Analysis/
│
├── backend/
│   ├── main.py
│   ├── utils.py
│   ├── model.pkl
│   ├── vectorizer.pkl
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── dataset/
│   └── sentiment.csv
│
├── training/
│   └── train_model.ipynb
│
├── tests/
│   └── testing_results.md
│
├── screenshots/
│
├── README.md
└── requirements.txt
```

---

## 📊 Machine Learning Workflow

1. Dataset Loading
2. Dataset Exploration
3. Data Cleaning
4. Text Preprocessing
5. TF-IDF Feature Extraction
6. Model Training
7. Model Evaluation
8. Model Saving
9. API Development
10. Frontend Integration
11. Testing
12. Deployment

---

## 🤖 Machine Learning Model

**Algorithm Used**

- Logistic Regression

**Feature Extraction**

- TF-IDF Vectorization

---

## 📈 Model Performance

| Model | Accuracy |
|--------|----------|
| Logistic Regression | **75.93%** |
| Naive Bayes | **72.62%** |

The Logistic Regression model was selected because it achieved the highest accuracy.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/AyeshaImran-61/Sentiment-Analysis-WebApp.git
```

### 2. Move into the Project

```bash
cd Sentiment-Analysis-WebApp
```

### 3. Install Dependencies

```bash
pip install -r backend/requirements.txt
```

### 4. Start the Backend

```bash
cd backend
uvicorn main:app --reload
```

Open:

```
http://127.0.0.1:8000/docs
```

### 5. Run the Frontend

Open the **frontend** folder in VS Code and launch **index.html** using the **Live Server** extension.

---

## 🧪 Testing

The application was tested with:

- ✅ Positive sentence
- ✅ Negative sentence
- ✅ Neutral sentence
- ✅ Empty input
- ✅ Long paragraph

Testing results are available in:

```
tests/testing_results.md
```

---

## 📸 Screenshots

Add your screenshots here after testing.

Example:

- Home Page
- Positive Prediction
- Negative Prediction
- Neutral Prediction
- Empty Input Validation
- Long Paragraph Prediction

---

## 📌 Future Improvements

- Confidence score for predictions
- Dark mode
- Support for additional languages
- Deep Learning models (LSTM/BERT)
- User authentication
- Prediction history

---

## 👩‍💻 Author

**Ayesha Imran**

Bachelor of Artificial Intelligence

University of Faisalabad

GitHub:
https://github.com/AyeshaImran-61

---

## 📄 License

This project is developed for educational and internship purposes.