export {};
interface CandidateScores {
  name: string;
  scores: number[];
}

interface IndividualPoint {
  name: string;
  points: number;
  percentage: number;
}


// A function to store all the list of names, their inital point and percentage
function initialIndividualPoint(
  scores: CandidateScores[],
): IndividualPoint[] {
  let arrayOfNames: IndividualPoint[] = [];
  for (let i = 0; i < scores.length; i++) {
    arrayOfNames.push({
      name: scores[i].name,
      points: 0,
      percentage: 0,
    });
  }

  return arrayOfNames;
}

function compareScores(
  candidateScores: CandidateScores[],
): IndividualPoint[] {
  let noOfIterations = candidateScores[0].scores.length;
  // An array of object of initial individual point
  let individualPoint = initialIndividualPoint(candidateScores);

  // A variable to check if there exists an equal max point in the loop
  let equalMaxValue = false;

  // An object that holds the current max score and the name
  let currentMaxScore = {
    name: "",
    score: 0,
  };

  // loop through the whole array 3 time to compare the three points of all the people
  for (let i = 0; i < noOfIterations; i++) {
    // check each of the individual score for each iteration and find the maximum value
    candidateScores.forEach((candidate) => {
      if (candidate.scores[i] > currentMaxScore.score) {
        currentMaxScore.name = candidate.name;
        currentMaxScore.score = candidate.scores[i];
        equalMaxValue = false;
      } else if (candidate.scores[i] === currentMaxScore.score) {
        equalMaxValue = true;
      }
    });

    // increment the individual point after every iteration
    if (!equalMaxValue) {
      const winner = individualPoint.find(
        (individual) => individual.name === currentMaxScore.name,
      );
      if (winner) {
        winner.points++;
        winner.percentage = Number(
          ((winner.points / noOfIterations) * 100).toFixed(2),
        );
      }
    }

    currentMaxScore.score = 0;
  }

  const sortedIndividualPoint = individualPoint.sort((a, b) => {
    return b.percentage - a.percentage;
  });

  return sortedIndividualPoint;
}

console.log(
  compareScores([
    { name: "Richard", scores: [1, 2, 9, 10] },
    { name: "Lukman", scores: [4, 5, 6, 12] },
    { name: "Israel", scores: [8, 5, 3, 11] },
    { name: "Michael", scores: [8, 6, 3, 13] },
  ]),
);
