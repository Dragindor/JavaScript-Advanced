function strlen(a,b,operator)
{
    let result;

    switch (operator)
        {
            case '+': result=a+b; break;
            case '-': result=a-b; break;
            case '*': result=a*b; break;
            case '/': result=a/b; break;
            case '%': result=a%b; break;
            case '**': result=a**b; break;
        }
    console.log(result);
};

strlen(5, 6, '+');
strlen(3, 2, '**');