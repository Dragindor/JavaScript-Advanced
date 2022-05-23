function strlen(arr)
{
    let resultArr=[];
    arr.sort((a,b) => b-a);

    while (arr.length !==0) 
    {
        resultArr.push(arr.pop());
        resultArr.push(arr.shift());
    }
    
    return resultArr;
}

strlen([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

strlen([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48])