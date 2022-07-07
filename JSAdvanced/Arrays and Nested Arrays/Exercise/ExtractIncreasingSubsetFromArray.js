function strlen(arr)
{
    let resultArr=[];
    let biggestNum =0;

    for (let index = 0; index < arr.length; index++) 
    {
        if (arr[index] >= biggestNum) 
        {
            biggestNum = arr[index];
            resultArr.push(arr[index]);
        }
    }
    return resultArr;
}

strlen([1,3,8,4,10, 12, 3, 2, 24])

strlen([1, 2, 3,4])