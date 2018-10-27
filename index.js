namespace GradeCalc
{
    class StudentGrade
    {
        public static void Main(string[] args)
        {
            int score1, score2, score3, score4, score5;
            double average;
            letterGrade = DetermineGrade;

            Console.WriteLine("Enter Your 5 Grades Below");
            score1 = GetInput("First", 90);
            score2 = GetInput("Second",87);
            score3 = GetInput("Third", 57);
            score4 = GetInput("Fourth", 56);
            score5 = GetInput("Last", 84);
        }
        public static int GetInput(string Order, out int t)
        {
            string inValue;
            Console.WriteLine("Enter the {0} test score: ", Order);
            inValue = Console.ReadLine();
            t = Convert.ToInt32(inValue);
            return t;
        }
        public static double CalcAvg (int score1, int score2, int score3, int score4, int score5)
        {
            return(score1 + score2 + score3 + score4 + score5) / 5;
        }
        public static char DetermineGrade (double avg)
        {
            char letterGrade;
                if (avg > 89)
                    letterGrade = 'A';
                else
                    if (avg > 79)
                    letterGrade = 'B';
                    else
                        if (avg > 69)
                        letterGrade = 'C';
                        else
                            if (avg > 59)
                            letterGrade = 'D';
                            else
                                if (avg <= 59)
                                letterGrade = 'F';
        return letterGrade;
        Console.WriteLine(" Your Grade is a(n)" + letterGrade);
        Console.ReadKey();
}
}
}
