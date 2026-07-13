async function predictSentiment() {

    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("result").innerHTML = "";

    try {

        const response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        const data = await response.json();

        document.getElementById("loading").style.display = "none";

        let emoji = "";

        if (data.prediction === "Positive") {
            emoji = "😊";
        }
        else if (data.prediction === "Negative") {
            emoji = "😞";
        }
        else {
            emoji = "😐";
        }

        document.getElementById("result").innerHTML = `
            <h2>${emoji} ${data.prediction}</h2>
            <p><strong>Input:</strong> ${data.text}</p>
        `;

    }
    catch (error) {

        document.getElementById("loading").style.display = "none";

        document.getElementById("result").innerHTML =
            "<h2>❌ Could not connect to the backend.</h2>";

        console.error(error);
    }
}