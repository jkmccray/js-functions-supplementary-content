const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {}

grades["A"] = 0
grades["B"] = 0
grades["C"] = 0
grades["D"] = 0
grades["F"] = 0

for (let i = 0; i < scores.length; i++) {
  let score = scores[i]
  /*
  If the score is greater than 90, increment grades.A by 1.
  
  You can use a series of `if/then` blocks, but you could
  also achieve this with a switch statement.
  */
  switch (score < 100) {
    case (score > 90):
      grades.A += 1;
      break;
    case (score > 80):
      grades.B += 1;
      break;
    case (score > 70):
      grades.C += 1;
      break;
    case (score > 60):
      grades.D += 1;
      break;
    case (score > 50):
      grades.F += 1;
      break;
  }
}

console.log(grades)

// 1. How many of each grade? Accomplish this with a for..in loop.
for (const letterGrade in grades) {
  console.info(`There are ${grades[letterGrade]} scores that earned letter grade ${letterGrade}`)
}

// 2. What is the lowest score? Sort the array and find out.
let ascendingScores = scores.sort((a, b) => a - b)
console.info(ascendingScores[0])
/*NOTE: By default, the sort() function sorts values as strings. 
This works well for strings ("Apple" comes before "Banana").
However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce incorrect result when sorting numbers.
You can fix this by providing a compare function (above) */

// 3. What is the highest score?
let descendingScores = scores.sort((a, b) => b - a)
console.info(descendingScores[0])

// 4. Which grade had the most students achieve it? Use an if statment, and a currentGradeCount variable, in your for..in loop to see if the current grade's value is higher than the last one.
let currentHighest
let currentHighestCount = 0
for (const currentGrade in grades) {
  if (grades[currentGrade] > currentHighestCount) {
    currentHighest = currentGrade
    currentHighestCount = grades[currentGrade]
  }
}
console.info(currentHighest)

// 5. Which grade had the fewest students achieve it?
let currentLowest
let currentLowestCount = currentHighestCount
for (const currentGrade in grades) {
  if (grades[currentGrade] < currentLowestCount) {
    currentLowest = currentGrade
    currentLowestCount = grades[currentGrade]
  }
}
console.info(currentLowest)


