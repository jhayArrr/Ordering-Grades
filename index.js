var userName;
 var gradeData = [89, 76, 45, 54, 90, 98, 78, 89];


 function addToArray() {
     txtName = document.getElementById("txtName").value;
     txtGrade = parseInt(document.getElementById("txtGrade").value);

     alert(txtName + " " + txtGrade);
     nameData.push(txtName);
     gradeData.push(txtGrade);

     document.getElementById("txtName").focus();
     document.getElementById("txtName").value = "";
     document.getElementById("txtGrade").value = "";


 }

 function displayContent() {

     for (var i = 0; i < nameData.length; i++) {

      //document.write("" + nameData[i] + " ," + gradeData[i] + "<br>");

        if (gradeData >= 90) {

             document.write( "" + nameData[i] + "A");
         }
         else if (gradeData >= 80) {

             document.write("" + nameData[i] + "B");
         }
         else if (gradeData >= 70) {
             document.write("" + nameData[i] + "C");
         }
         else if (gradeData >= 60) {
             document.write("" + nameData[i] + "D");
         }
         else {
             document.write("" + nameData[i] + "F");
         }

     }

     }
