//Variable is an array for security
const marks = [99, 90, 75, 89, 78, 84, 45, 69]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", calculatedGrade (average1), "because my numerical average is", calculateAverage (marks));

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (average1) {
  const average2 = calculateAverage (marks);
  if (average2 < 60) return 'F'; //Add appropriate grade or feedback
  if (average2 < 69) return 'D'; //Add approriate conditional
  if (average2 < 79) return 'C';
  if (average2 < 89) return 'B';
  return A; //This is the last grade left, using the funnel image (metaphor)
}
function calculateAverage (array) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
