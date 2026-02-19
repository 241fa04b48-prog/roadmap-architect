const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeSkills(jobTitle) {

    const url = `https://www.indeed.com/jobs?q=${jobTitle}`;

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    let skills = [];

    $("ul li").each((i, el) => {
        const text = $(el).text().toLowerCase();

        if (
            text.includes("docker") ||
            text.includes("kubernetes") ||
            text.includes("aws") ||
            text.includes("linux") ||
            text.includes("git") ||
            text.includes("python") ||
            text.includes("ci/cd")
        ) {
            skills.push(text);
        }
    });

    return [...new Set(skills)];
}

module.exports = scrapeSkills;
