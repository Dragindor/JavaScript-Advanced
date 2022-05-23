function strlen(arr)
{
    let resultArr=[];
    let num =1;

    for (let index = 0; index < arr.length; index++) 
    {
        if (arr[index] === 'add') 
        {
            resultArr.push(num);
        }
        else if (arr[index] === 'remove') 
        {
            resultArr.pop();
        }
        num++;
    }
    if (resultArr.length==0) 
    {
        console.log('Empty');
    }
    else
    {
        console.log(resultArr.join('\n'));
    }
}

strlen(['add',
'add',
'add',
'add'])

strlen(['add','add','remove','add','add'])