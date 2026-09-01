function compareTheScores(candidateScores) {
  let points = candidateScores.map((student) => {
    return {
      name: student.name,
      score: 0,
    };
  });

  // console.log(points);

  for (let i = 0; i < candidateScores.length; i++) {
    //create an array of points for each students
    //Gather all compare scores of each students
    let compareScores = candidateScores.map((student) => {
      // console.log("hey", student.scores[i]);
      return student.scores[i];
    });

    // console.log(compareScores);

    //check the max score in the compareScore Array
    const maxScore = Math.max(...compareScores);
    // console.log("maxscore", maxScore);

    //check if max score is more than one in the compareScore Array
    const topScorers = candidateScores.filter(
      (student) => student.scores[i] === maxScore,
    );
    // console.log(topScorers);

    //if topScorer is more than one, do not give any point, else, find topScorer and give one point
    if (topScorers.length === 1) {
      for (const point of points) {
        if (point.name === topScorers[0].name) {
          point.score = point.score + 1;
        }
      }
    }
  }

  // console.log(points);

  //check for percentage of score

  for (let student of points) {
    student.percentage = ((student.score / points.length) * 100).toFixed(2);
  }

  //sort the items in the array based on the point.

  points.sort((a, b) => b.score - a.score);

  console.log(points);
}

compareTheScores([
  { name: "Richard", scores: [1, 2, 9] },
  { name: "Lukman", scores: [4, 5, 6] },
  { name: "Israel", scores: [7, 5, 3] },
]);
