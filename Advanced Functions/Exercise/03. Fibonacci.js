    let n1 = 0, n2 = 1, nextTNum;
    function fib()
    {
        nextTNum = n1 + n2;
        n1 = n2;
        n2 = nextTNum;
        
        return nextTNum;
    }
    
    //let fib = getFibonator();

    console.log(fib()); // 1
    
    console.log(fib()); // 1
    
    console.log(fib()); // 2
    
    console.log(fib()); // 3
    
    console.log(fib()); // 5
    
    console.log(fib()); // 8
    
    console.log(fib()); // 13

