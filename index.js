//Variable is an array for security
const  average1 = [89, 76, 95, 42, 63, 79, 54, 91]; //add grades as an array
var average2;

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", calculatedGrade(average2), "because my numerical average is", average1);

function calculatedGrade (average1) {
  const average1 = calculatedGrade (average2);
  if (average1 < 60) return 'F' ; //Add appropriate grade or feedback
  if (average1 < 69) return 'D' ; //Add approriate conditional
  if (average1 < 79) return 'C' ;
  if (average1 < 89) return 'B' ;
  if (average1 <= 100) return 'A' ; //This is the last grade left, using the funnel image (metaphor)
}
function calculateGrade (array) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
