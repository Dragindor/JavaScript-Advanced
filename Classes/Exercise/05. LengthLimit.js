class Stringer
{
    constructor(string, length)
    {
        this.innerString = string;
        this.innerlength = length;
    }

    increase(num)
    {
        this.innerlength += num;
    }

    decrease(num)
    {
        if (this.innerlength - num < 0) 
        {
            this.innerlength = 0;
        }
        else
        {
            this.innerlength -= num;
        }
    }
    toString()
    {
        if (this.innerlength < this.innerString.length) 
        {
            return this.innerString.substring(0, this.innerlength) + '...';    
        }
        else
        {
            return this.innerString;
        }
    }
}