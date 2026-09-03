export {};

function staircase(n: number): void {
  const staircaseAsArray: string[] = [];

  // Loop through up until n
  for (let i: number = 1; i <= n; i++) {
    // In each iteration, print a number of "#" that corresponds to the current step and prepend " " to fill it up
    const hashes: string = "#".repeat(i);
    const spaces: string = " ".repeat(n - i);
    staircaseAsArray.push(spaces + hashes);
  }

  const staircaseAsString: string = staircaseAsArray.join("\n");
  console.log(staircaseAsString);
  // return staircaseAsString;
}
