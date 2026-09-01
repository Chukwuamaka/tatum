function plusMinus(arr) {
  // Write your code here
  //create and occurrance of positive, negative and zero integer numbers.
  //check every items in the array.

  let occurrence = [0, 0, 0];

  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;

  for (let element of arr) {
    //check for number of positive integers in the arr
    if (Number.isInteger(element) && element > 0) {
      occurrence[0] = occurrence[0] + 1;
    }

    //check for number of negative integers in the arr
    else if (Number.isInteger(element) && element < 0) {
      occurrence[1] = occurrence[1] + 1;
    }

    //check for number of zero integers in the arr.
    else if (Number.isInteger(element) && element === 0) {
      occurrence[2] = occurrence[2] + 1;
    } else {
      continue;
    }
  }
  //check for the number of element in an array

  const arrayLength = arr.length;

  //Assign the ratio of positive, negative, and zero integer numbers in the array.

  let positiveRatio = Number((occurrence[0] / arrayLength).toFixed(6));
  let negativeRatio = Number((occurrence[1] / arrayLength).toFixed(6));
  let zeroRatio = Number((occurrence[2] / arrayLength).toFixed(6));

  //Print out Positive, Negative and Zero ratio respectively new line.
  console.log(arrayLength, occurrence);

  console.log(positiveRatio);
  console.log(negativeRatio);
  console.log(zeroRatio);
}

plusMinus([1, 2, 3, 0, -1, 5]);
