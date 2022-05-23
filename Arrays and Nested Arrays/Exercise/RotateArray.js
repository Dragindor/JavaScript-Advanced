function strlen(arr, N)
{
    for (let index = 0; index < N; index++) 
    {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

strlen(['1',
'2',
'3',
'4'],
2)

strlen(['Banana', 'Orange', 'Coconut', 'Apple'], 15)