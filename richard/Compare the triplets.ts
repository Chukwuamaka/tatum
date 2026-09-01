function compareTriplets (a: number[], b: number[]): void{
  // Create an array that holds the points gotten by Alice and Bob respectively from the comparison
  const points: number[] = [0, 0];

  for (let i: number = 0; i < a.length; i++) {
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

let a: Array<number> = [17, 28, 30];
let b: number[] = [99, 16, 18];
compareTriplets(a, b);