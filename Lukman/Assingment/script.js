// Create compareScores function
// Receive candidateScores
function compareScores(candidateScores) {

    // STEP 1: Create empty results
    let results = [];
    // STEP 2: Give everyone 0 points
    // FOR each candidate
    //     Store name and 0 points
    for (let i = 0; i < candidateScores.length; i++) {
        results.push({
            name: candidateScores[i].name,
            points: 0
        });
    }

    // STEP 3: Count categories
    // Get number of categories

    let numberOfCategories = candidateScores[0].scores.length;


    // STEP 4: Check each category
    // FOR each category
    //     Find highest score
    //     Count highest scores
    //     Give point if no tie

    for (let category = 0; category < numberOfCategories; category++) {
        // STEP 5: Find highest score
        // Set highest to 0
        // Find the highest score

        let highest = 0;

        for (let i = 0; i < candidateScores.length; i++) {
            let score = candidateScores[i].scores[category];
            if (score > highest) {
                highest = score;
            }
        }
        // STEP 6: Count highest scores
        // Count people with highest score

        let highestCount = 0;
        for (let i = 0; i < candidateScores.length; i++) {
            let score = candidateScores[i].scores[category];
            if (score === highest) {
                highestCount++;
            }
        }


        // STEP 7: Give point
        // IF no tie
        //     Give 1 point to winner

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
    // Calculate each person's percentage
    for (let i = 0; i < results.length; i++) {
        results[i].percentage =
            Number(
                (
                    (results[i].points / numberOfCategories) * 100
                ).toFixed(2)
            );
    }
    // STEP 9: Sort results
    // Sort highest percentage first
    results.sort(function (a, b) {
        return b.percentage - a.percentage;
    });
    // STEP 10: Return results
    // Return results
    return results;
}
// Create candidates
// Call function
// Display results
let candidateScores = [
    { name: "Richard", scores: [1, 2, 9] },
    { name: "Lukman", scores: [4, 5, 6] },
    { name: "Israel", scores: [7, 5, 3] }
];

console.log(compareScores(candidateScores));