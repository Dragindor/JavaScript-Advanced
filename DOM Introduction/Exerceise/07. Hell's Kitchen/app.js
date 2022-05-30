function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() 
   {
      let inputArr = JSON.parse(document.querySelector('#inputs textarea').value);  
      let avgSalary = 0;
      let totalSalary = 0;
      let currAvgSalary = 0;
      let bestName = '';
      let output = {};

      for (const input of inputArr) 
      {
         let restarauntInfo = input.split(' - ');
         let restaurantName = restarauntInfo.shift();
         let workersData = restarauntInfo[0].split(', ');
         for (const worker of workersData) 
         {
            let [name, salary] = worker.split(' ');

            if (!output.hasOwnProperty(restaurantName)) 
            {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) 
            {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (const entry of entries) 
      {
         let key = entry[0];
         let values = Object.entries(entry[1]);
         for (const [name, salary] of values) 
         {
            totalSalary += salary;
         }

         avgSalary = totalSalary / values.length;

         if (avgSalary > currAvgSalary) 
         {
            currAvgSalary = avgSalary;
            bestName = key;
            totalSalary = 0;
         }
      }

      let print = '';

      let result = Object.entries(output[bestName])
      .sort((a,b) => b[1] - a[1]);

      result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `);

      document.querySelector('#bestRestaurant p')
      .textContent = `Name: ${bestName} Average Salary: ${currAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;

      document.querySelector('#workers p').textContent = print;
   }
}