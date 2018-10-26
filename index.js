

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
