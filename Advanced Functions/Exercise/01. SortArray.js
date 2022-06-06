function strlen(arr, sort)
{
    if (sort === "asc") 
    {
        arr.sort((a, b) => a-b);
    }
    else if (sort === "desc")
    {
        arr.sort((a, b) => b-a);
    }
    console.log(arr);
}

strlen([14, 7, 17, 6, 8], 'asc')
strlen([14, 7, 17, 6, 8], 'desc')