function strlen(arr, N)
{
    var resultArr=[];
    for (let index = 0; index < arr.length; index+=N) 
    {
        resultArr.push(arr[index]);
    }
    return resultArr;
}

strlen(['5',
'20',
'31',
'4',
'20'],
2)

strlen(['1', '2', '3', '4', '5'], 6)