function compareTriplet(a: number[], b: number[]): number[] {

    const points: number[] = [0, 0];

    for (let i = 0; i < a.length; i++) {
    
    if (a[i] > b[i]) {
      points[0] = points[0] + 1;
    }

    
    else if (a[i] < b[i]) {
      points[1] = points[1] + 1;
    }

    
    else {
      continue;
    }
  }
  return points;
}

let aliceScores : number[] = [17, 28, 30];
let bobScores : number[] = [99, 16, 18];

console.log(compareTriplet(aliceScores, bobScores));