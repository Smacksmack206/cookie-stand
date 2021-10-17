'use strict';


// const Store = document.getElementById('tbody');
let hours = [' ', '6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 a.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m', 'Daily Location Total'];
let stores = [];

// globaltotal is used to display final numbers on tfooter//
let globalTotal = 0;

//declare variables for sections of the table//
const tablehead = document.getElementById('thead');
const tablebody = document.getElementById('tbody');
const tablefooter = document.getElementById('tfooter');

// create a function for displaying thead//
function renderTHEAD() {
    for (let i = 0; i < hours.length; i++) {
        let thElement = document.createElement('th');
        thElement.textContent = hours[i];
        tablehead.appendChild(thElement);
    }
}
renderTHEAD();

//Change Object Literal of Seattle to a constuctor function called store
function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.cookiesSoldEachHourArray = [];
    // between min and max//
    this.getRandomCustomers = function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    };
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    this.getCookieSalesPerHour = function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    };
    this.totalSumOfCookies = function () {
        console.log(this.cookiesSoldEachHourArray);
        let totalSum = 0;
        for (let i = 0; i < this.hours.length - 1; i++) {
            this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
            totalSum += this.cookiesSoldEachHourArray[i];
            console.log(this.cookiesSoldEachHourArray[i]);
            return totalSum;
        }
    }; 
    this.renderTbody = function () {
            let trElement = document.createElement('tr');
            trElement.textContent = this.name;
            tablebody.appendChild(trElement);
            let sum = 0;
            for (let i = 0; i < hours.length -2; i++) {
                this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
              let td = document.createElement('td');
              sum += this.cookiesSoldEachHourArray[i]; 
              td.textContent = this.cookiesSoldEachHourArray[i];
              trElement.appendChild(td);
            }
            let tdElement3 = document.createElement('td');
            tdElement3.textContent = sum;
            globalTotal += sum;
            trElement.appendChild(tdElement3);
        }
        stores.push(this);
    };





//

// Create new objects from the constructor with the new keyword and define each store
// Question for TA when I use new location( vs using let seattle = new Location; I'm getting different results//

let seattle = new Location(
    'Seattle', 23, 65, 6.3
);
console.log(seattle);
let tokyo = new Location(
    'Tokyo', 3, 24, 1.2
);

let dubai = new Location(
    'Dubai', 11, 38, 3.7
);

let paris = new Location(
    'Paris', 11, 38, 3.7
);

let lima = new Location(
    'Lima', 11, 38, 3.7
);




// Test it is working by rendering it on the page
seattle.renderTbody();
tokyo.renderTbody();;
dubai.renderTbody();;
paris.renderTbody();;
lima.renderTbody();

// Create a for loop to dislay

//


// create a function for display tfooter//
//This controls the bottom total//
function renderTFOOTER() {
    let total = document.createElement('tr');
    total.textContent = 'Total';
    tablefooter.appendChild(total);
    let totalPerHour = 0;
    let finalArray = [];
    for (let i = 0; i < hours.length -2; i++) {
        totalPerHour = seattle.cookiesSoldEachHourArray[i] + tokyo.cookiesSoldEachHourArray[i] + dubai.cookiesSoldEachHourArray[i] + paris.cookiesSoldEachHourArray[i] + lima.cookiesSoldEachHourArray[i];
        let tdElement2 = document.createElement('td');
        tdElement2.textContent = totalPerHour;
        total.appendChild(tdElement2);
        finalArray.push(totalPerHour);
       
    }
    let tdElement2 = document.createElement('td');
    tdElement2.textContent = globalTotal;
    total.appendChild(tdElement2);
}
console.log(globalTotal);
renderTFOOTER();