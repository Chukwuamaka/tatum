interface Candidate {
    name: string;
    scores: number[];
}

interface Result {
    name: string;
    points: number;
    percentage: number;
}

function compareScores(candidateScores: Candidate[]): Result[] {
    const numberOfCategories = candidateScores[0].scores.length;

    const results: Result[] = candidateScores.map(candidate => ({
        name: candidate.name,
        points: 0,
        percentage: 0
    }));

    // Compare each category
    for (let category = 0; category < numberOfCategories; category++) {

        // Get everyone's score for this category
        const scores = candidateScores.map(
            candidate => candidate.scores[category]
        );

        // Find the highest score
        const highestScore = Math.max(...scores);

        // Count how many people have the highest score
        const highestCount = scores.filter(
            score => score === highestScore
        ).length;

        // Award a point only if the highest score is unique
        if (highestCount === 1) {
            const winnerIndex = scores.indexOf(highestScore);

            results[winnerIndex].points++;
        }
    }

    // Calculate percentage
    results.forEach(result => {
        result.percentage = Number(
            ((result.points / numberOfCategories) * 100).toFixed(2)
        );
    });

    // Sort by percentage, highest first
    results.sort((a, b) => b.percentage - a.percentage);

    return results;
}

const candidates: Candidate[] = [
    { name: "Richard", scores: [1, 2, 9] },
    { name: "Lukman", scores: [4, 5, 6] },
    { name: "Israel", scores: [7, 5, 3] }
];

const result = compareScores(candidates);

console.log(result);