namespace _25_point_grade_scale
{
    class Program
    {
        static void Main(string[] args)
        {
            double testScore;

            Console.WriteLine("Please enter your score out of 25");
            Console.ReadLine());

            if (testScore >= 24)
            {
                Console.WriteLine("A");
            }
            else if (testScore >= 20.75)

            {
                Console.WriteLine("B");
            }
            else if (testScore >= 18.25)

            {
                Console.WriteLine("C");
            }
            else if (testScore >= 15)

            {
                Console.WriteLine("D");
            }
            else
            {
                Console.WriteLine("F");
            }
        }
    }
}
