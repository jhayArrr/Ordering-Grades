const marks = [56, 75, 84, 95, 88, 79]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (average) {
  const average = calculateAverage (marks);
  if (average < 60) return  'F';
  if (average < 69) return  'D';
  if (average < 79) return  'C';
  if (average < 89) return  'B';
  return A; //This is the last grade left, using the funnel image (metaphor)
}
