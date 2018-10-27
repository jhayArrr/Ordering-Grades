	public static void main(String[] args) throws IOException{
		System.out.println("Enter numeric grade to convert to a letter grade, and press enter to calculate.");
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String userInput = br.readLine();
        ArrayList<Integer> allGrades = new ArrayList<Integer>();
        Scanner scan = new Scanner(userInput);
        while(scan.hasNext()){
        	try{
        		int grade = Integer.parseInt(scan.next().trim());
            	if(grade < 0) {
            		System.out.println("You did not enter a valid grade. Grades cannot be less than 0");
            	} else if(grade>100){
            		System.out.println("You did not enter a valid grade. Grades cannot be greater than 100");
            	} else{
            		allGrades.add(grade);
            	}
        	} catch (NumberFormatException x){
        		System.out.println("You did not enter a valid number as a grade. Sorry, please try again");
        		System.exit(1);
        	}
        }
        if(allGrades.size()!=0){
        	int[] marks = new int[8];
        	Arrays.fill(marks, 0);
        	for (int x = 0; x < allGrades.size(); x++){
        		int mark = allGrades.get(x);
        		if(mark < 70){
        			marks[0]++;
        		} else if (mark < 70){
        			marks[1]++;
        		} else if(mark < 76){
        			marks[2]++;
        		} else if(mark < 80){
        			marks[3]++;
				} else if(mark < 86){
				   marks[4]++;
				} else if(mark < 90){
					marks[5]++;
				} else if(mark < 96){
					marks[6]++;
        		} else {
        			marks[7]++;
        		}
        	}

        	System.out.println( marks[0] +"'F'");
        	System.out.println( marks[2] +"'D'");
        	System.out.println( marks[3] +"'C'");
        	System.out.println( marks[4] +"'B'");
			System.out.println( marks[5] +"'B+'");
			System.out.println( marks[6] +"'A'");
			System.out.println( marks[7] +"'A+'");


        } else {

        }

	}
