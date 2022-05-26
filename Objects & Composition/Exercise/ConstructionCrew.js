function strlen(arr)
{
    if (arr.dizziness) 
    {
        arr.levelOfHydrated += 0.1* arr.weight * arr.experience;

        arr.dizziness=false;
    }

    return arr;
}

strlen({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });