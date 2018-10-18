const marks = [56, 75, 84, 95, 88, 79]; //add grades as an array

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (average) {
  const average = calculateAverage (marks);
  if (average < 60) return  'F';
  if (average < 69) return  'D';
  if (average < 79) return  'C';
  if (average < 89) return  'B';
  return A; //This is the last grade left, using the funnel image (metaphor)


console.log ("My letter grade is", calculatedGrade (average), ";because my numerical average is", calculateAverage (marks));
}
