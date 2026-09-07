function diagonalDifference(diff) {
    // Write your code here
    let n = diff.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
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
    
    let total = primaryDiagonal - secondaryDiagonal;
    let absoluteDiff = Math.abs(primaryDiagonal - secondaryDiagonal);
    console.log(absoluteDiff);
    console.log(total);
}

diagonalDifference([
    [11, 2, 4], 
    [4, 5, 6], 
    [10, 8, -12]
]);