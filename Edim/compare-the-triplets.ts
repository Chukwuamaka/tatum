function _compareTriplets(_a: number[], _b: number[]) {
  // Create an array that holds the points gotten by Alice and Bob respectively from the comparison
  const points: number[] = [0, 0];

  for (let i = 0; i < _a.length; i++) {
    // Check the greater item in the same index between a and b
    // If a[i] > b[i], increment Alice's point by 1
    if (_a[i] > _b[i]) {
      points[0] = points[0] + 1;
    }

    // If a[i] < b[i], increment Bob's point by 1
    else if (_a[i] < _b[i]) {
      points[1] = points[1] + 1;
    }

    // If a[i] === b[i], do nothing
    else {
      continue;
    }
  }

  for (const score of _a) {
    const i = _a.indexOf(score);

    // If a[i] > b[i], increment Alice's point by 1
    if (_a[i] > _b[i]) {
      points[0] = points[0] + 1;
    }

    // If a[i] < b[i], increment Bob's point by 1
    else if (_a[i] < _b[i]) {
      points[1] = points[1] + 1;
    }

    // If a[i] === b[i], do nothing
    else {
      continue;
    }
  }

  console.log(points);
}

let _a = [17, 28, 30];
let _b = [99, 16, 18];
_compareTriplets(_a, _b);
