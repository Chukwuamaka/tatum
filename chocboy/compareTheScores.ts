interface CandidateScore {
  name: string;
  scores: number[];
}

interface ComparisonResult {
  name: string;
  points: number;
  percentage: number;
}

function compareScore(candidateScores: CandidateScore[]): ComparisonResult[] {
  const numCategories = candidateScores[0].scores.length;
  const points: number[] = candidateScores.map(() => 0);

  for (let category = 0; category < numCategories; category++) {
    let maxScore = -Infinity;
    let maxCount = 0;
    let maxIndex = -1;

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

    if (maxCount === 1) {
      points[maxIndex]++;
    }
  }

  return candidateScores.map((candidate, i) => ({
    name: candidate.name,
    points: points[i],
    percentage: parseFloat(((points[i] / numCategories) * 100).toFixed(2)),
  }));
}