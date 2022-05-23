function strlen(arr)
{
    arr.sort(twoCriteries);
    return arr.join('\n');
    function twoCriteries(current,next)
    {
        if (current.length === next.length) 
        {
            return current.localeCompare(next);
        }  

        return current.length - next.length;
    }   
}

strlen(['alpha','beta','gamma'])

strlen(['Isacc', 'Theodor','Jack', 'Harrison', 'George'])