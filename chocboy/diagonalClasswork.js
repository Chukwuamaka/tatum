function DiagonalClasswork(arr) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    let n = arr.length;

    for (i =0; i < n; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][n - 1 - i];
    }

    let diagonalDifference = Math.abs(leftDiagonalSum - rightDiagonalSum);
    console.log(diagonalDifference);
}


DiagonalClasswork([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]);
