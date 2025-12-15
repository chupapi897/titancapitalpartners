document.getElementById("appForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    try {
        const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if(result.success){
            document.getElementById("appForm").style.display = "none";
            document.getElementById("successBox").style.display = "block";
            document.getElementById("refID").innerText = result.reference;
        } else {
            alert("Submission failed: " + result.message);
        }
    } catch (err) {
        console.error(err);
        alert("An error occurred. Please try again.");
    }
});
