function generateRoadmap(skills) {

    const roadmap = [];

    if (skills.some(s => s.includes("linux")))
        roadmap.push("Learn Linux fundamentals");

    if (skills.some(s => s.includes("git")))
        roadmap.push("Learn Git and version control");

    if (skills.some(s => s.includes("docker")))
        roadmap.push("Learn Docker containerization");

    if (skills.some(s => s.includes("kubernetes")))
        roadmap.push("Learn Kubernetes orchestration");

    if (skills.some(s => s.includes("aws")))
        roadmap.push("Learn Cloud platforms (AWS/Azure)");

    if (skills.some(s => s.includes("ci")))
        roadmap.push("Learn CI/CD pipelines");

    if (skills.length === 0)
        roadmap.push("No specific skills found — start with fundamentals");

    return roadmap;
}

module.exports = generateRoadmap;
