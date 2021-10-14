'use strict';

// Object for Seattle //
const seattleStore = document.getElementById('seattleList');
let hours = ['6 a.m', '7 a.m', '8 a.m', '9 a.m', '10 a.m', '11 a.m', '12 a.m', '1 p.m', '2 p.m', '3 p.m', '4 p.m', '5 p.m', '6 p.m', '7 p.m',];
let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesSoldEachHourArray: [],
    // between min and max//
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    getCookieSalesPerHour: function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    },
    //where the magic happens//
    displayOnPage: function () {
        let sum = 0;
        for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]} ` + ` ${this.getCookieSalesPerHour()}` + `  cookies`;
        seattleStore.appendChild(li);
        this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
        sum += this.cookiesSoldEachHourArray[i];
        console.log(sum);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total cookies ` + sum;
        seattleStore.appendChild(liTotal);
    },
}
function totalSumOfCookies() {
    console.log(seattle.cookiesSoldEachHourArray);

    let totalSum = 0;
    for (let i = 0; i < seattle.cookiesSoldEachHourArray.length; i++) {
        totalSum += seattle.cookiesSoldEachHourArray[i];
        console.log(seattle.cookiesSoldEachHourArray[i]);
        return totalSum;
}
}
// Loop for 6am to 7pm for hours. push values back to cookies sold per hour array //
// for (let i = 0; i < 13; i++) {
//     seattle.cookiesSoldEachHourArray.push(seattle.getCookieSalesPerHour());
//     seattle.displayOnPage();
// }

//Display name of Seattle Store//
document.getElementById("seattleList").innerHTML = "The Seattle Store";

let colorSeattle = document.getElementById('seattleList');

colorSeattle.style.color = '#41858b';

//Runs the method I created in the seattle object that creates the unordered list and iterates the theoretical cookies for each hour on the page.//
seattle.displayOnPage();

// should return a number between 23 - 65 //
// console.log(seattle.getRandomCustomers());

// should return a number between 144.9 - 409.5 based off previous method created in the seattle object relating to min potential cookies per hour vs max cookies per hour times 6.3 customer per hour on average//
// console.log(seattle.getCookieSalesPerHour());

// should return the theoretical cookies sold per hour using above methods from seattle object from hours 6am - 7pm aka 13 hours//
// console.log(seattle.cookiesSoldEachHourArray)


// Next steps //

// 1. Need to add a total of cookies //

// 2. Finish other stores //

// 2.a When adding more objects it broke my current setup, ask a TA about this later//


// Object for Tokyo //
const tokyoStore = document.getElementById('tokyoList');
let tokyo = {
    name: 'tokyo',
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesSoldEachHourArray: [],
    // between min and max//
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    getCookieSalesPerHour: function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    },
    //where the magic happens//
    displayOnPage: function () {
        let sum = 0;
        for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]} ` + ` ${this.getCookieSalesPerHour()}` + `  cookies`;
        tokyoStore.appendChild(li);
        this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
        sum += this.cookiesSoldEachHourArray[i];
        console.log(sum);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total cookies ` + sum;
        tokyoStore.appendChild(liTotal);
    },
}
function totalSumOfCookies() {
    console.log(tokyo.cookiesSoldEachHourArray);

    let totalSum = 0;
    for (let i = 0; i < tokyo.cookiesSoldEachHourArray.length; i++) {
        totalSum += tokyo.cookiesSoldEachHourArray[i];
        console.log(tokyo.cookiesSoldEachHourArray[i]);
        return totalSum;
}
}
//Display name of Tokyo Store//
document.getElementById("tokyoList").innerHTML = "The Tokyo Store";
let colorTokyo = document.getElementById('tokyoList');

colorTokyo.style.color = '#b6c6b5';

//Runs the method I created in the tokyo object that creates the unordered list and iterates the theoretical cookies for each hour on the page.//
tokyo.displayOnPage();


// Object for Dubai //
const DubaiStore = document.getElementById('DubaiList');
let Dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesSoldEachHourArray: [],
    // between min and max//
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    getCookieSalesPerHour: function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    },
    //where the magic happens//
    displayOnPage: function () {
        let sum = 0;
        for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]} ` + ` ${this.getCookieSalesPerHour()}` + `  cookies`;
        DubaiStore.appendChild(li);
        this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
        sum += this.cookiesSoldEachHourArray[i];
        console.log(sum);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total cookies ` + sum;
        DubaiStore.appendChild(liTotal);
    },
}
function totalSumOfCookies() {
    console.log(Dubai.cookiesSoldEachHourArray);

    let totalSum = 0;
    for (let i = 0; i < Dubai.cookiesSoldEachHourArray.length; i++) {
        totalSum += Dubai.cookiesSoldEachHourArray[i];
        console.log(Dubai.cookiesSoldEachHourArray[i]);
        return totalSum;
}
}
//Display name of Dubai Store//
document.getElementById("DubaiList").innerHTML = "The Dubai Store";
let colorDubai = document.getElementById('DubaiList');

colorDubai.style.color = '#ebd0a8';

//Runs the method I created in the Dubai object that creates the unordered list and iterates the theoretical cookies for each hour on the page.//
Dubai.displayOnPage();


// Object for Paris //
const ParisStore = document.getElementById('ParisList');
let Paris = {
    name: 'Paris',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesSoldEachHourArray: [],
    // between min and max//
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    getCookieSalesPerHour: function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    },
    //where the magic happens//
    displayOnPage: function () {
        let sum = 0;
        for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]} ` + ` ${this.getCookieSalesPerHour()}` + `  cookies`;
        ParisStore.appendChild(li);
        this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
        sum += this.cookiesSoldEachHourArray[i];
        console.log(sum);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total cookies ` + sum;
        ParisStore.appendChild(liTotal);
    },
}
function totalSumOfCookies() {
    console.log(Paris.cookiesSoldEachHourArray);

    let totalSum = 0;
    for (let i = 0; i < Paris.cookiesSoldEachHourArray.length; i++) {
        totalSum += Paris.cookiesSoldEachHourArray[i];
        console.log(Paris.cookiesSoldEachHourArray[i]);
        return totalSum;
}
}
//Display name of Paris Store//
document.getElementById("ParisList").innerHTML = "The Paris Store";
let colorParis = document.getElementById('ParisList');

colorParis.style.color = '#b37163';

//Runs the method I created in the Paris object that creates the unordered list and iterates the theoretical cookies for each hour on the page.//
Paris.displayOnPage();



// Object for Lima //
const LimaStore = document.getElementById('LimaList');
let Lima = {
    name: 'Lima',
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesSoldEachHourArray: [],
    // between min and max//
    getRandomCustomers: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    // I've set to run 2nd equation of random customers per hour vs average cookies sold //
    getCookieSalesPerHour: function () {
        return Math.ceil(this.getRandomCustomers() * this.avg);
    },
    //where the magic happens//
    displayOnPage: function () {
        let sum = 0;
        for (let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${hours[i]} ` + ` ${this.getCookieSalesPerHour()}` + `  cookies`;
        LimaStore.appendChild(li);
        this.cookiesSoldEachHourArray.push(this.getCookieSalesPerHour());
        sum += this.cookiesSoldEachHourArray[i];
        console.log(sum);
        }
        let liTotal = document.createElement('li');
        liTotal.textContent = `Total cookies ` + sum;
        LimaStore.appendChild(liTotal);
    },
}
function totalSumOfCookies() {
    console.log(Lima.cookiesSoldEachHourArray);

    let totalSum = 0;
    for (let i = 0; i < Paris.cookiesSoldEachHourArray.length; i++) {
        totalSum += Paris.cookiesSoldEachHourArray[i];
        console.log(Paris.cookiesSoldEachHourArray[i]);
        return totalSum;
}
}
//Display name of Lima Store//
document.getElementById("LimaList").innerHTML = "The Lima Store";

let colorLima = document.getElementById('LimaList');

colorLima.style.color = '#9200a8';

//Runs the method I created in the Lima object that creates the unordered list and iterates the theoretical cookies for each hour on the page.//
Lima.displayOnPage();
