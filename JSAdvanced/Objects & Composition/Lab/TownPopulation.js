function strlen(towns) 
{
    const Towns={};

    for (const town of towns) 
    {
        let tokens= town.split(' <-> ');

        let name=tokens[0];
        let population = Number(tokens[1]);

        if (Towns[name] == undefined ) 
        {
            Towns[name] = population;
        }
        else
        {
            Towns[name] += population;          
        }
    }

    for (let town in Towns) {
        console.log(`${town} : ${Towns[town]}`);
    }
}

strlen(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);