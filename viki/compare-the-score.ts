export{}

// Define the structure of each candidate
interface Candidate {
  name: string;
  scores: number[];
}

// Define the structure of the result
interface CandidateResult {
  name: string;
  points: number;
  percentage: number;
}

function compareScores(candidateScores: Candidate[]): CandidateResult[] {
  // If candidateScores is an empty array, return early
  if (!candidateScores || candidateScores.length === 0) {
    return [];
  }

  // Count how many score categories there are
  const numOfCategories = candidateScores[0].scores.length;

  // Give every person a point starting at 0
  const pointsMap: CandidateResult[] = candidateScores.map((c) => ({
    name: c.name,
    points: 0,
    percentage: 0,
  }));

  // Go through each category one at a time
  for (let cat = 0; cat < numOfCategories; cat++) {
    // Find the maximum score among all candidates in this category
    let maxScore = 0;
    let currentWinner = "";

    for (const candidate of candidateScores) {
      if (candidate.scores[cat] > maxScore) {
        maxScore = candidate.scores[cat];
        currentWinner = candidate.name;
      } else if (candidate.scores[cat] === maxScore) {
        // If there is a tie, there is no winner for this category
        currentWinner = "";
      }
    }

    // Award a point to the winner
    if (currentWinner) {
      const winnerEntry = pointsMap.find(
        (p) => p.name === currentWinner
      );

      if (winnerEntry) {
        winnerEntry.points += 1;
      }
    }
  }

  // Turn each point into a percentage
  const result: CandidateResult[] = pointsMap.map((entry) => ({
    ...entry,
    percentage: Number(
      ((entry.points / numOfCategories) * 100).toFixed(2)
    ),
  }));

  // Put the highest percentage first
  result.sort((a, b) => b.percentage - a.percentage);

  return result;
}

// Candidate names and scores
const candidateScores: Candidate[] = [
  { name: "Richard", scores: [7, 5, 3] },
  { name: "Lukman", scores: [10, 5, 6] },
  { name: "Israel", scores: [1, 2, 9] },
  { name: "Viki", scores: [11, 11, 11] },
];

// Display the result
console.log(compareScores(candidateScores));