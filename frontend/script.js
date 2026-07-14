async function predictSentiment() {

    const text = document.getElementById("textInput").value.trim();

    if (text === "") {
        alert("Please enter some text.");
        return;
    }

    document.getElementById("loading").style.display = "block";
    document.getElementById("result").innerHTML = "";

    try {

        // Call the deployed backend
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const data = await response.json();

        document.getElementById("loading").style.display = "none";

        let emoji = "😐";

        if (data.prediction === "Positive") {
            emoji = "😊";
        }
        else if (data.prediction === "Negative") {
            emoji = "😞";
        }

        document.getElementById("result").innerHTML = `
            <h2>${emoji} ${data.prediction}</h2>
            <p><strong>Input:</strong> ${data.text}</p>
        `;

    }
    catch (error) {

        document.getElementById("loading").style.display = "none";

        document.getElementById("result").innerHTML = `
            <h2>❌ Backend Error</h2>
            <p>${error.message}</p>
        `;

        console.error(error);
    }
}