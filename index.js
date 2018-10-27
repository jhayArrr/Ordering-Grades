//Variable is an array for security
const  average1 = [99, 90, 75, 89, 78, 84, 45, 69]; //add grades as an array
var average2;

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", average1, "because my numerical average is", average2);

function calculatedGrade (average2) {
  const average1 = calculateAverage (average2);
  if (average2 < 60) return 'F'; //Add appropriate grade or feedback
  if (average2 < 69) return 'D'; //Add approriate conditional
  if (average2 < 79) return 'C';
  if (average2 < 89) return 'B';
  if (average2 <= 100) return 'A'; //This is the last grade left, using the funnel image (metaphor)
}
function calculateAverage (array) {
}
