// Determine the number of categories from scores[0].length (assuming all candidates have the same number of scores).
function compareScores(candidateScores) {
  // If candidateScores is empty array, return early (an empty array).
  if (!candidateScores || candidateScores.length === 0) return [];

  // Count how many score categories there are.
  const numOfCategories = candidateScores[0].scores.length;

  // Give every person a point starting at 0.
  const pointsMap = candidateScores.map((c) => ({
    name: c.name,
    points: 0,
    percentage: 0,
  }));

  // Go through each category at a time.
  for (let cat = 0; cat < numOfCategories; cat++) {
    // Find the maximum score among all candidates in this category.
    let maxScore = 0;
    let currentWinner = "";

    for (const candidate of candidateScores) {
      if (candidate.scores[cat] > maxScore) {
        maxScore = candidate.scores[cat];
        currentWinner = candidate.name;
      } else if (candidate.scores[cat] === maxScore) {
        currentWinner = "";
      }
    }

    if (currentWinner) {
      const winnerEntry = pointsMap.find((p) => p.name === currentWinner);
      winnerEntry.points += 1;
    }
  }
  // Turn each point to  percentage and cacluate for each candidate
  const result = pointsMap.map((entry) => ({
    ...entry,
    percentage: Number(((entry.points / numOfCategories) * 100).toFixed(2)),
  }));

  // Put the highest percentage first.
  result.sort((a, b) => b.percentage - a.percentage);

  return result;
}

// Trace through name and scores giving
const candidateScores = [
  { name: "Richard", scores: [7, 5, 3] },
  { name: "Lukman", scores: [10, 5, 6] },
  { name: "Israel", scores: [1, 2, 9] },
  { name: "Viki", scores: [11, 11, 11] },
];
console.log(compareScores(candidateScores));
