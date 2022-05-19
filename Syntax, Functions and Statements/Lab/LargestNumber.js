function strlen(a,b,c)
{
    let result
    if (a>b && a>c) 
    {
       result=a;
    }

    if (b>a && b>c) 
    {
       result=b;
    }

    if (c>b && c>a) 
    {
       result=c;
    }

    console.log(`The largest number is ${result}.`);
};

strlen(5, -3, 16);