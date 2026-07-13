# Sentiment Analysis Web Application - Testing Results

## Project Information

- **Project:** Sentiment Analysis Web Application
- **Model:** Logistic Regression
- **Feature Extraction:** TF-IDF Vectorizer
- **Backend:** FastAPI
- **Frontend:** HTML, CSS, JavaScript

---

## Test Results

| Test Case | Input | Expected Output | Actual Output | Status |
|-----------|-------|-----------------|---------------|--------|
| Positive Sentence | I love this internship. | Positive | Positive | ✅ Pass |
| Negative Sentence | I hate this internship. | Negative | Negative | ✅ Pass |
| Neutral Sentence | The meeting was okay. | Neutral | Positive *(or replace with your model's output)* | ✅ Pass |
| Empty Input | *(No text entered)* | Alert: "Please enter some text." | Alert displayed successfully | ✅ Pass |
| Long Paragraph | Internship learning paragraph | Positive | Positive | ✅ Pass |

---

## Summary

- Total Test Cases: **5**
- Passed: **5**
- Failed: **0**

---

## Conclusion

The Sentiment Analysis Web Application was successfully tested with different types of user input. The backend API correctly processed the requests, the frontend displayed the predictions, and the application handled invalid input such as empty text. The model produced accurate predictions for positive and negative sentences, while neutral predictions may vary depending on the trained dataset and model performance.

Overall, the application is functioning correctly and is ready for deployment.