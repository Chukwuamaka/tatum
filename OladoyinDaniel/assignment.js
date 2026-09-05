function compareScores(candidateScores) {
  if (!candidateScores || candidateScores.length === 0) return [];

  const categoryCount = candidateScores[0].scores.length;
  const points = {};

  // Initialize scores map for each candidate
  candidateScores.forEach((candidate) => {
    points[candidate.name] = 0;
  });

  // Evaluate each category across all candidates
  for (let category = 0; category < categoryCount; category++) {
    let maxScore = -Infinity;
    let topCandidates = [];

    candidateScores.forEach((candidate) => {
      const score = candidate.scores[category];

      if (score > maxScore) {
        maxScore = score;
        topCandidates = [candidate.name];
      } else if (score === maxScore) {
        topCandidates.push(candidate.name);
      }
    });

    // Award 1 point if there is a single winner for the category
    if (topCandidates.length === 1) {
      pointsMap[topCandidates[0]] += 1;
    }
  }

  // Calculate percentage and format the results
  const results = candidateScores.map((candidate) => {
    const points = pointsMap[candidate.name];
    const percentage = Number(((points / categoryCount) * 100).toFixed(2));

    return {
      name: candidate.name,
      points: points,
      percentage: percentage,
    };
  });

  // Sort descending by percentage performance
  return results.sort((a, b) => b.percentage - a.percentage);
}

const candidateScores = [
  { name: "Doyin", scores: [1, 7, 4] },
  { name: "Daniel", scores: [4, 8, 2] },
  { name: "Grandpa", scores: [9, 5, 1] },
];

console.log(compareScores(candidateScores));