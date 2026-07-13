from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

from utils import preprocess_text

app = FastAPI(
    title="Sentiment Analysis API",
    description="AI-powered sentiment prediction using Logistic Regression",
    version="1.0"
) 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")


class TextRequest(BaseModel):
    text: str


@app.get("/")
def home():
    return {
        "message": "Sentiment Analysis API is running!"
    }


@app.post("/predict")
def predict(request: TextRequest):
    cleaned_text = preprocess_text(request.text)
    vector = vectorizer.transform([cleaned_text])
    prediction = model.predict(vector)[0]

    return {
        "text": request.text,
        "prediction": prediction
    }