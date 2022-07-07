(function arrays()
{
    let arr = [1,2,3];

    Array.prototype.last = function ()
    {
        return arr[arr.length -1];
    };

    Array.prototype.skip = function (n)
    {
        let result = [];

        for (let index = n; index < arr.length; index++) 
        {
            result.push(this[index]);              
        }

        return result;
    };

    Array.prototype.take = function (n)
    {
        let result = [];

        for (let index = 0; index < n; index++) 
        {
            result.push(this[index]);              
        }
        
        return result;
    };

    Array.prototype.sum = function ()
    {
        return this.reduce((a,b) => a+b, 0);
    };

    Array.prototype.average = function ()
    {
        return this.reduce((a,b) => a+b) / arr.length;
    };
})();