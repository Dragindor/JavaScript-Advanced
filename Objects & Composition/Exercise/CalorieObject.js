function strlen(arr)
{
    let products = {};
    for (let index = 0; index < arr.length; index+=2) 
    {
        let product = arr[index];
        let cal=arr[index + 1];

        products[product]= Number(cal);
        
    }

    console.log(products);
}

strlen(['Yoghurt', '48', 'Rise', '138','Apple', '52']);
strlen(['Potato', '93', 'Skyr', '63','Cucumber', '18', 'Milk', '42']);