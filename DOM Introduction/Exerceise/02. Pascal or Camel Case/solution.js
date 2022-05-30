function solve() 
{
    let text=document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;

    let result= '';

    let words=text.split(/(\s+)/).filter(x => x != ' ');

    if (namingConvention == 'Camel Case') 
    {
      for (let index = 0; index < array.length; index++) 
      {
        words[index] = words[indes].toLowerCase;
        
        if (index != 0) 
        {
          words[index] = words[index].charAt(0).toUpperCase() + words[index].substring(1);
        }
      }
    }
    else if (namingConvention == 'Pascal Case') 
    {
      for (let index = 0; index < array.length; index++) 
      {
        words[index] = words[indes].toLowerCase;
        words[index] = words[indes].charAt(0).toUpperCase() + words[index].substring(1);
      }
    }
    else 
    {
      return document.getElementById('result').textContent ='Error!';
    }

    result = words.join('');
    
    return document.getElementById('result').textContent = result;
}