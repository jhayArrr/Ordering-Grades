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



</script>

</head>
<body onload="showPrompt()">
<h2>Compute Average Grades</h2>



<div id="content">
<p>Enter names and grades into a tow-dimensional array (and array of two arrays)
 using text boxes for input and two buttons; one to "Add" input to the arrays
 and one to calculate the average grade and "Display" the information in the arrays.
</p>
<p>
<label for="txtName">Student Name:</label>
<input type="text" id="txtName" value="">
 <br><br>
<label for="txtGrade">Grade:</label>
<input type="text" id="txtGrade" value="">
 <br><br clear: left>
</p>
<div style="text-align:center">
<input type="button" class = "btnClass" value="Add" onclick="addToArray()">&nbsp;&nbsp;
<input type="button" class = "btnClass" value="Display" onclick="displayContent()">
