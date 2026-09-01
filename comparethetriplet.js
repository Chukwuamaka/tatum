function compareTriplets(a, b) {
    // Create an array that holds the points by alice and bob respectively from the comparison
    const points = [0, 0];
    // let alicePoint = points[0]
    // let bobPoint = points[1]    
    // alicePoint = alicePoint + 1
    // bobPoint = bobPoint + 1

    // Loop through a and b
    // i < Array.length ===> i < 3
    // i <= Array.length - 1 ===> i <= 2
    for (let i = 0; i < a.length; i++) {
        // Check the greater item in the same index between a and b
        // If a[i] > b[i], increment alice's point by 1
        if (a[i] > b[i]) {
            points [0] = points [0] + 1;
        }
       
        // If a[i] < b[i], increment bob's point by 1
        else if (a[i] < b[i]) {
            points[1] points[1] + 1;
        }

        // If a[i] === b[i], do nothing
        else {
            continue;
        }
    }

    console.log(points);
}

let a = [17, 28, 30];
let b = [99, 16, 18];

