function strlen(a,b,c)
{
    let number1 = a.length;
    let number2 = b.length;
    let number3 = c.length;

    let sum=number1+number2+number3;
    let average=Math.floor(sum/3)

    console.log(sum);
    console.log(average);
};

strlen('chocolate', 'ice cream', 'cake');