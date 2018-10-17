const marks = [56, 75, 84, 95, 88, 79]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (marks) {
  const average = calculateAverage (marks);
  if (average < 60) return marks 'F'; 
  if (average < 69) return marks 'D';
  if (average < 79) return marks 'C';
  if (average < 89) return marks 'B';
  return A; //This is the last grade left, using the funnel image (metaphor)
}
function calculteAverage (array) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
