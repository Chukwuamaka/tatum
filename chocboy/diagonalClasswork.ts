function diagonalClasswork(arr: number[][]): number {
    let leftDiagonalSum: number = 0;
    let rightDiagonalSum: number = 0;

    let n : number = arr.length;

    for (let i : number= 0; i < n; i++) {
        leftDiagonalSum += arr[i][i];
        rightDiagonalSum += arr[i][n - 1 - i]; 
    }

    return Math.abs(leftDiagonalSum - rightDiagonalSum);
}


let scores : number[][] = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];

console.log(diagonalClasswork(scores));
