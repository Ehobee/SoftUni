function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
 
    function onClick() {
       let input = JSON.parse(document.querySelector('#inputs textarea').value);
       let avgSalary = 0;
       let totalSalary = 0;
       let curAvgSalary = 0;
       let bestName = '';
       let obj = {};
       //console.log(typeof input) - object
       for (let restaurant of input) {
          let list = restaurant.split(' - ');
          let restaurantName = list.shift();
          let workers = list[0].split(', ');
 
          for (let worker of workers) {
             let [name, salary] = worker.split(' ');
 
             if (!obj.hasOwnProperty(restaurantName)) {
                obj[restaurantName] = {};
             } else {
                obj[restaurantName][name] = Number(salary);
             }
          }
       }
       let entries = Object.entries(obj);
 
       for (let entry of entries) {
          let key = entry[0];
          let values = obj.values(entry[1]);
 
          for (let salary of values) {
             totalSalary += salary;
          }
          avgSalary = totalSalary / values.length;
          if (avgSalary > curAvgSalary) {
 
             curAvgSalary = avgSalary;
             bestName = key;
             totalSalary = 0;
          }
       }
       let result = Object.entries(obj[bestName]).sort((a, b) => b[1] - a[1]);
       let print = '';
 
       result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1].toFixed(2)}`);
       document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${curAvgSalary.toFixed(2)} Best Salary: ${result[0][1]}`;
       document.querySelector('#workers p').textContent = print;
    }
 }