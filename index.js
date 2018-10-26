const marks = [56, 75, 84, 95, 88, 79]; //add grades as an array


//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", calculatedGrade (average1), ";because my numerical ave. is", calculateAverage (marks));

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (average1) {
  const average2 = calculateAverage (marks);
  if (calculatedGrade (average2) < 60) return  'F';
  if (calculatedGrade (average2) < 69) return  'D';
  if (calculatedGrade (average2) < 79) return  'C';
  if (calculatedGrade (average2) < 89) return  'B';
  if (calculatedGrade (average2) <= 100) return 'A'; //This is the last grade left, using the funnel image (metaphor)

  function calculateAverage (arrays) {
    let sum = 0;
    for (let average1 of arrays) sum += arrays; //Example of reading an array and one line to add up the sum of all the grades
    return sum / marks.length; }
  }
