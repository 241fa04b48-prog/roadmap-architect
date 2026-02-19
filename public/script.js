function generateRoadmap() {

    const job = document.getElementById("jobInput").value;

    fetch("/generate-roadmap", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ job: job })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").textContent = data.roadmap;
    })
    .catch(err => {
        alert("Error generating roadmap");
        console.error(err);
    });
}
