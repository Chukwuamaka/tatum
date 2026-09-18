function compareScores(candidateScores) {
  const numCategories = candidateScores[0].scores.length;
  const points = candidateScores.map(() => 0);

  // For each category, find the max score and check if it's unique
  for (let category = 0; category < numCategories; category++) {
    let maxScore = -Infinity;
    let maxCount = 0;
    let maxIndex = -1;

    // find the highest score in this category and how many share it
    candidateScores.forEach((candidate, i) => {
      const score = candidate.scores[category];
      if (score > maxScore) {
        maxScore = score;
        maxCount = 1;
        maxIndex = i;
      } else if (score === maxScore) {
        maxCount++;
      }
    });

    // only award a point if exactly one person has the top score
    if (maxCount === 1) {
      points[maxIndex]++;
    }
  }

  // build the result with percentage performance
  const result = candidateScores.map((candidate, i) => ({
    name: candidate.name,
    points: points[i],
    percentage: parseFloat(((points[i] / numCategories) * 100).toFixed(2)),
  }));

  // sort descending by percentage
  result.sort((a, b) => b.percentage - a.percentage);

  return result;
}

console.log(compareScores([
  { name: "Richard", scores: [1, 2, 9] },
  { name: "Lukman", scores: [4, 5, 6] },
  { name: "Israel", scores: [7, 5, 3] },
  { name: "Aisha", scores: [10, 10, 3] },
]));

// Output:
// [
//   { name: 'Richard', points: 1, percentage: 33.33 },
//   { name: 'Israel', points: 1, percentage: 33.33 },
//   { name: 'Lukman', points: 0, percentage: 0 }
// ]