const username: string = "Edim";
const age: number = 25;
const isActive: boolean = false;
const array: number[] = [1,2];
const arrays: string[] = ["Doyin", "Daniel"];

// const name: string = "Hi"

const arrOfArr: string[][] = [[]];


// The below should be used only when the type of data is not known
const dan: {} | Object = {}; // An Object can be typed as either

function type (){}

// if (!expression){
    // ...condition
// }

// Types are in capital letter while variables licke const are in small case letters

//Assignment is: convert compare the triplets to typescript and the problem we solved in class also to typescript 

function diagonalDifference2 (diff: number[][]): void {
    
    let n: number = diff.length;
    let primaryDiagonal: number = 0;
    let secondaryDiagonal: number = 0;
    for (let i=0; i < n; i++) {
        for ( let j=0; j < n; j++) {
            if (i == j) {
                primaryDiagonal += diff[i][j];
            }
            if ( i + j == n-1) {
                secondaryDiagonal += diff[i][j];
            }
        }
    }
    
    let total: number = primaryDiagonal - secondaryDiagonal;
    let absoluteDiff: number = Math.abs(primaryDiagonal - secondaryDiagonal);
    console.log(absoluteDiff);
    console.log(total);
}

diagonalDifference2([
    [11, 2, 4], 
    [4, 5, 6], 
    [10, 8, -12]
]);


function compareTriplets(a: number[], b: number[]) {
  // Create an array that holds the points gotten by Alice and Bob respectively from the comparison
  const points: number[] = [0, 0];

  for (let i = 0; i < a.length; i++) {
    // Check the greater item in the same index between a and b
    // If a[i] > b[i], increment Alice's point by 1
    if (a[i] > b[i]) {
      points[0] = points[0] + 1;
    }

    // If a[i] < b[i], increment Bob's point by 1
    else if (a[i] < b[i]) {
      points[1] = points[1] + 1;
    }

    // If a[i] === b[i], do nothing
    else {
      continue;
    }
  }

  for (const score of a) {
    const i: number = a.indexOf(score);

    // If a[i] > b[i], increment Alice's point by 1
    if (a[i] > b[i]) {
      points[0] = points[0] + 1;
    }

    // If a[i] < b[i], increment Bob's point by 1
    else if (a[i] < b[i]) {
      points[1] = points[1] + 1;
    }

    // If a[i] === b[i], do nothing
    else {
      continue;
    }
  }

  console.log(points);
}

let a: number[] = [17, 28, 30];
let b: number[] = [99, 16, 18];
compareTriplets(a, b);






// assignment 2
export

interface CScore {
  name: string[],
  scores: number[]
}
function compareScores(candidateScores: { name: string; scores: number[]; }[]) {
  if (!candidateScores || candidateScores.length === 0) return [];

  const categoryCount: number = candidateScores[0].scores.length;
  const points: { name: string; scores: number[]; }[] = {};

  // Initialize scores map for each candidate
  candidateScores.forEach((candidate) => {
    points[candidate.name] = 0;
  });

  // Evaluate each category across all candidates
  for (let category = 0; category < categoryCount; category++) {
    let maxScore = -Infinity;
    let topCandidates: [] = [];

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