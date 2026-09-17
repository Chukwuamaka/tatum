// const scoreConstraint = (name, scoreName) => {
//   let score = prompt(`Enter ${name}\'s ${scoreName} rating score`);

//   while (
//     Number(score) < 1 ||
//     Number(score) > 100 ||
//     isNaN(Number(score)) ||
//     score === ""
//   ) {
//     alert("Invalid score. Please enter a valid number between 1 and 100");
//     score = prompt(`Enter ${name}\'s ${scoreName} rating score`);
//   }

//   return Number(score);
// };

// // Collect rating for Alice
// const aliceProblemClarityRating = scoreConstraint("Alice", "problem clarity");
// const aliceOriginalityRating = scoreConstraint("Alice", "originality");
// const aliceDifficultyRating = scoreConstraint("Alice", "difficulty");

// // Collect rating for Bob
// const bobProblemClarityRating = scoreConstraint("Bob", "problem clarity");
// const bobOriginalityRating = scoreConstraint("Bob", "originality");
// const bobDifficultyRating = scoreConstraint("Bob", "difficulty");

// // Combine Alice ratings in an array
// const aliceRatings = [
//   aliceProblemClarityRating,
//   aliceOriginalityRating,
//   aliceDifficultyRating,
// ];

// // Combine Bob ratings in an array
// const bobRatings = [
//   bobProblemClarityRating,
//   bobOriginalityRating,
//   bobDifficultyRating,
// ];

// console.log(aliceRatings);
// console.log(bobRatings);

// // function to compare the ratings
// const compareTriplets = (aliceRatings, bobRatings) => {
//   const scoreComparison = [0, 0];

//   for (let i = 0; i < aliceRatings.length; i++) {
//     if (aliceRatings[i] > bobRatings[i]) {
//       scoreComparison[0] += 1;
//     } else if (bobRatings[i] > aliceRatings[i]) {
//       scoreComparison[1] += 1;
//     }
//   }

//   return scoreComparison;
// };

// console.log(compareTriplets(aliceRatings, bobRatings));

function diagonalDifference(arr) {
  let n = arr.length;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        primaryDiagonal += arr[i][j];
      }
      if (i + j == n - 1) {
        secondaryDiagonal += arr[i][j];
      }
    }
  }

  let absDifference = Math.abs(primaryDiagonal - secondaryDiagonal);
  console.log(primaryDiagonal);
  console.log(secondaryDiagonal);
  
  
  console.log(absDifference);
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);