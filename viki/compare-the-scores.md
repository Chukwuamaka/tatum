This problem is a spin-off of the `compare-the-triplets` problem.

Simply put, instead of comparing scores between only Alice and Bob along the three categories (problem clarity, originality, and difficulty), we want to extend this solution to compare scores between a dynamic number of people along those same categories.

That said, the data structure of the input parameters will change. The function will now accept only one argument, `candidateScores`, structured as an array of objects as seen below:

```javascript
[
  { name: "Richard", scores: [1, 2, 3] },
  { name: "Lukman", scores: [4, 5, 6] },
  { name: "Israel", scores: [7, 8, 9] },
];
```

The task is to calculate their comparison points by comparing each category:

- If a person's score is the highest in a category, then that person is awarded 1 point.
- If the two highest scores in a category are the same, then neither person receives a point.

Finally, after calculating the points:

- calculate each person's percentage performance to two decimal places based on the number of points garnered across the categories.
- sort the result in descending order based on the percentage.

### Example

```javascript
[
  { name: "Richard", scores: [1, 2, 9] },
  { name: "Lukman", scores: [4, 5, 6] },
  { name: "Israel", scores: [7, 5, 3] },
];
```

- For element _0_, Israel is awarded a point because he has the highest score in the problem clarity category.
- For elemnt _1_ (originality category), no point is earned because the highest score of 5 is shared by Lukman and Israel.
- Finally, for element _2_ (difficulty category), Richard has the highest score so he is awarded a point.
- Richard and Israel will have a percentage performance of 33.33, while Lukman will have a percentage performance of 0.
- The result in descending order based on percentage performance will have the hierarchy `Richard > Israel > Lukman` or `Israel > Richard > Lukman`. There are two possible hierarchies because of the tie between Richard and Israel.

### Function Description

Complete the function compareScores with the following parameter(s):

- `candidateScores`: An array of objects with each candidate's name and scores, as seen in the example above.

#### Returns

An array of objects, each with the following information: name, points, and percentage. The array should be sorted in descending order of percentage.

For the example outlined above, the return value would be:

```javascript
[
  { name: "Richard", points: 1, percentage: 33.33 },
  { name: "Israel", points: 1, percentage: 33.33 },
  { name: "Lukman", points: 0, percentage: 0 },
];
```

### Constraints

1 ≤ scores[i] ≤ 100
