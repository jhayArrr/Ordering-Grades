//Variable is an array for security
const marks = [80, 75, 74, 70, 68, 41]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (symbol) {
  const average = calculateAverage (marks);
  if (average > 89) return 'A'; //Add appropriate grade or feedback
  if (average > 79) return 'B'; //Add approriate conditional
  if (average > 69) return 'C';
  if (average > 59) return 'D';
  if (averahe <= 59) return 'F';
  return A; //This is the last grade left, using the funnel image (metaphor)
}
function calculteAverage (array) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
