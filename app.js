function compareTriplets(a, b)   {
        const points = [0, 0];

    // Loop through a and b to compare each element
    // i < Array length ===> i < 3
    // i <= Array length ===> -1 ===> i <=2
    for (let i = 0; i < a.length; i++) {
        // check the greater item in the same index between a and b
        // if a[i] > b[i] then increment Alice's score
        if (a[i] > b[i]) {
            points[0] += 1;
        } else if (a[i] < b[i]) {
            points[1] += 1;
        }
        else {
            continue;
        }
    }
    return points;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // Output: [1, 1