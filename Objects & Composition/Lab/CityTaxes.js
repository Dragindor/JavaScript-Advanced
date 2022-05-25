function cityTaxes(cityName, cityPopulation, cityTreasury) 
{
    const city=
    {
        name: cityName,
        population: cityPopulation,
        treasury: cityTreasury,
        taxRate: 10,

        collectTaxes(){ this.treasury += Math.floor(this.taxRate * this.population)},

        applyGrowth(percentage){ this.population += Math.floor(this.population * percentage / 100)},

        applyRecession(percentage){ this.treasury -= Math.floor(this.treasury * percentage / 100)}
    };

    return city;
}

const city = cityTaxes('Tortuga',
7000,
15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);