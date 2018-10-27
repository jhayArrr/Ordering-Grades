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
