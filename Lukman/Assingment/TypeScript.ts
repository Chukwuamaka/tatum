// Create compareScores function
// Receive candidateScores

interface Candidate {
    name: string;
    scores: number[];
}

interface Result {
    name: string;
    points: number;
    percentage: number;
}

function compareScore(candidateScores: Candidate[]): Result[] {

    // Handle empty array
    if (candidateScores.length === 0) {
        return [];
    }

    // STEP 1: Create empty results
    let results: Result[] = [];

    // STEP 2: Give everyone 0 points
    // FOR each candidate
    //     Store name and 0 points
    for (let i = 0; i < candidateScores.length; i++) {
        results.push({
            name: candidateScores[i].name,
            points: 0,
            percentage: 0 // placeholder, calculated in STEP 8
        });
    }

    // STEP 3: Count categories
    // Get number of categories
    let numberOfCategories: number = candidateScores[0].scores.length;

    // STEP 4: Check each category
    // FOR each category
    //     Find highest score
    //     Count highest scores
    //     Give point if no tie
    for (let category = 0; category < numberOfCategories; category++) {

        // STEP 5: Find highest score
        let highest = 0;
        for (let i = 0; i < candidateScores.length; i++) {
            let score = candidateScores[i].scores[category];
            if (score > highest) {
                highest = score;
            }
        }

        // STEP 6: Count highest scores
        let highestCount = 0;
        for (let i = 0; i < candidateScores.length; i++) {
            let score = candidateScores[i].scores[category];
            if (score === highest) {
                highestCount++;
            }
        }

        // STEP 7: Give point (only if no tie)
        if (highestCount === 1) {
            for (let i = 0; i < candidateScores.length; i++) {
                let score = candidateScores[i].scores[category];
                if (score === highest) {
                    results[i].points++;
                }
            }
        }
    }

    // STEP 8: Calculate percentage
    for (let i = 0; i < results.length; i++) {
        results[i].percentage =
            Number(((results[i].points / numberOfCategories) * 100).toFixed(2));
    }

    // STEP 9: Sort results (highest percentage first)
    results.sort(function (a, b) {
        return b.percentage - a.percentage;
    });

    // STEP 10: Return results
    return results;
}

// Create candidates, call function, display results
let candidateScores: Candidate[] = [
    { name: "Richard", scores: [1, 2, 9] },
    { name: "Lukman", scores: [4, 5, 6] },
    { name: "Israel", scores: [7, 5, 3] }
];

console.log(compareScores(candidateScores));