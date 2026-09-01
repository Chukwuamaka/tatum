n = 4`
   #
  ##
 ###
####
`;

n = 5`
    #
   ##
  ###
 ####
#####
`;

// Possible staircase initial structures
// const staircase = [
//   [" ", " ", " ", "#"],
//   [" ", " ", "#", "#"],
//   [" ", "#", "#", "#"],
//   ["#", "#", "#", "#"],
// ];

// const staircase = [
//   "   #",
//   "  ##",
//   " ###",
//   "####",
// ];

function staircase(n) {
  const staircaseAsArray = [];

  // Loop through up until n
  for (let i = 1; i <= n; i++) {
    // In each iteration, print a number of "#" that corresponds to the current step and prepend " " to fill it up
    const hashes = "#".repeat(i);
    const spaces = " ".repeat(n - i);
    staircaseAsArray.push(spaces + hashes);
  }

  const staircaseAsString = staircaseAsArray.join("\n");
  console.log(staircaseAsString);
}
