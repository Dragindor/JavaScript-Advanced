function strlen(a)
{
    let input = String(a);
    let sum=0;
    let same=true;

    for (let index = 0; index < input.length; index++) 
    {
        if (input[0] != input[index]) 
        {
            same=false;
        }

        sum+=Number(input[index]);
        
    }

    console.log(`${same}`);
    console.log(`${sum}`);
};

strlen('2222222');