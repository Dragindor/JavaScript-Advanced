class Hex
{
    constructor(x)
    {
        this.param = x;
    }

    valueOf()
    {
        return this.param;
    }

    plus(obj)
    {
        let result = this.param + Number(obj.valueOf())
        return new Hex(result);
    }

    plus(obj)
    {
        let result = this.param - Number(obj.valueOf())
        return new Hex(result);
    }

    toSting()
    {
        return '0x' + this.param.toSting(16).toUpperCase();
    }

    parse(str)
    {
        return parseInt(str, 16)
    }
}

