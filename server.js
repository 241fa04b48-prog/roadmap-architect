const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/generate-roadmap", (req, res) => {
    const job = req.body.job;

    const roadmap = `
STEP 1: Learn Basics of ${job}
STEP 2: Learn Programming (Python/JavaScript)
STEP 3: Study Core Concepts of ${job}
STEP 4: Build Projects related to ${job}
STEP 5: Prepare Resume & Portfolio
STEP 6: Apply for ${job} Jobs
`;

    res.json({ roadmap });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
