let protein = 0;
let carbohydrate = 0;
let fat = 0;
let flavour = 0;

function solution(stringArr) 
{

    if (stringArr == undefined) 
    {
        return;
    }

    let splitted = stringArr.split(' ');
    let command = splitted[0];
    if (splitted.command === "report") 
    {
        return (`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`);
    }

    let ingredient = splitted[1];
    let amount = Number(splitted[2]);

    if (command === "restock") 
    {
        switch (ingredient) 
        {
            case 'flavour': 
                flavour += amount;
                break;
            case 'fat': 
                fat += amount;
                break;
            case 'carbohydrate': 
                carbohydrate += amount;
                break;
            case 'protein': 
                protein += amount;
                break;

            default:
                break;

        }
        return ('Success');
    }
    else if (command === "prepare") 
    {
        for (let index = 0; index < amount; index++) 
        {
            switch (ingredient) 
            {
                case 'apple':
                    if (carbohydrate >= 1 && flavour >= 2) 
                    {
                        carbohydrate -= 1;
                        flavour -= 2;
                        return ('Success');
                    }
                    else if (carbohydrate < 1) 
                    {
                        return ('Error: not enough carbohydrate in stock');
                    }
                    else 
                    {
                        return ('Error: not enough flavour in stock');
                    }
                    

                case 'lemonade':
                    if (carbohydrate >= 10 && flavour >= 20) 
                    {
                        carbohydrate -= 10;
                        flavour -= 20;

                        return ('Success');
                    }
                    else if (carbohydrate < 10) 
                    {
                        return ('Error: not enough carbohydrate in stock');
                    }
                    else 
                    {
                        return ('Error: not enough flavour in stock');
                    }

                case 'burger':
                    if (carbohydrate >= 5 && fat >= 7 && flavour >= 3) 
                    {
                        carbohydrate -= 5;
                        fat -= 7;
                        flavour -= 3;
                        return ('Success');
                    }
                    else if (carbohydrate < 5) 
                    {
                        return ('Error: not enough carbohydrate in stock');
                    }
                    else if (fat < 7) 
                    {
                        return ('Error: not enough fat in stock');
                    }
                    else 
                    {
                        return ('Error: not enough flavour in stock');
                    }

                case 'eggs':
                    if (protein >= 5 && fat >= 1 && flavour >= 1) 
                    {
                        protein -= 5;
                        fat -= 1;
                        flavour -= 1;
                        return ('Success');
                    }
                    else if (protein < 5) 
                    {
                        return ('Error: not enough protein in stock');
                    }
                    else if (fat < 1) 
                    {
                        return ('Error: not enough fat in stock');
                    }
                    else 
                    {
                        return ('Error: not enough flavour in stock');
                    }

                case 'turkey':
                    if (protein >= 10 && carbohydrate >= 10 && fat >= 10 && flavour >= 10) 
                    {
                        protein -= 10;
                        carbohydrate -= 10;
                        fat -= 10;
                        flavour -= 10;
                        return ('Success');
                    }
                    else if (protein < 10) 
                    {
                        return ('Error: not enough protein in stock');
                    }
                    else if (carbohydrate < 10) 
                    {
                        return ('Error: not enough carbohydrate in stock');
                    }
                    else if (fat < 10) 
                    {
                        return ('Error: not enough fat in stock');
                    }
                    else 
                    {
                        return ('Error: not enough flavour in stock');
                    }

                default:
                    break;
            }
        }
    }
}

//let manager = solution(); 

console.log(solution("restock flavour 50")); // Success

console.log(solution("prepare lemonade 4")); // Error: not enough carbohydrate in stock

//Input              Output
//restock flavour 50 Success

//prepare lemonade 4  Error: not enough carbohydrate in stock

//restock carbohydrate 10  Success

//restock flavour 10 Success
//prepare apple 1 Success
//report protein=0 carbohydrate=4 fat=3 flavour=55
//restock fat 10 Success
//prepare burger 1 Success 