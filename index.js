public static void Main(string[] args)
    {
        int ARRAYLENGTH = 0;
        int i = 0;
        double sum = 0;

        Console.WriteLine("How many scores would you like to enter? ");
        ARRAYLENGTH = Convert.ToInt32(Console.ReadLine());

        string[] test = new string[ARRAYLENGTH];

        for (i = 0; i < test.Length; i++)

        {
            Console.Write("Enter your test score " + (i + 1) + ": ");
            test[i] =
            Console.ReadLine();
        }
        for (i = 0; i < test.Length; i++)
        {
            sum = sum +
            Convert.ToDouble(test[i].Trim());
        }
        Console.WriteLine("\nThis is your average = " + (sum / test.Length));
        Console.WriteLine("\nYour grade is: ");//Not sure how this would work
        Console.Write("\nPress the [Enter] key to exit.");
        Console.ReadLine();
    }
    double gradePer = sum / test.Length
string gradeLetter = "F";

if (gradePer >= 60 && gradePer < 70) {
     gradeLetter = "D";
} else if (gradePer >= 70 && gradePer < 80) {
     gradeLetter = "C";
} // you fill in the rest

Console.WriteLine("\nThis is your average = " + gradePer);
Console.WriteLine("\nYour grade is: " + gradeLetter);

static char GetLetterGrade(double score)
{
    if (score >= 90.0)
    {
        return 'A';
    }

    if (score >= 80.0)
    {
        return 'B';
    }

    if (score >= 70.0)
    {
        return 'C';
    }

    if (score >= 60.0)
    {
        return 'D';
    }

    return 'F';
}
