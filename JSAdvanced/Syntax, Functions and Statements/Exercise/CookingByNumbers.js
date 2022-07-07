function strlen(number, first, second, third, forth, fifth)
{
    let poorNumber = Number(number);
    let chop = x => x/2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x*3;
    let fillet = x => x - x * 0.2;

    let commands=[first, second, third, forth, fifth];

    for (let index = 0; index < commands.length; index++) {
        
        switch (commands[index]) 
        {
            case "chop":
                poorNumber = chop(poorNumber);
                break;
            case "dice":
                poorNumber = dice(poorNumber);
                break;
            case "spice":
                poorNumber = spice(poorNumber);
                break;
            case "bake":
                poorNumber = bake(poorNumber);
                break;
            case "fillet":
                poorNumber = fillet(poorNumber);
                break;
            default:
                break;
        }
        console.log(poorNumber);
        
    }
   
}

strlen('32', 'chop', 'chop', 'chop', 'chop', 'chop');
strlen('9', 'dice', 'spice', 'chop', 'bake', 'fillet');