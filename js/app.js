'use strict';
// this array for hours 
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// this empty array i push on it (this) from the Seattle 
let arrr = [];
// this variable for store all data on it
let main = document.getElementById('store');
// this variable for create a new table on it
let Table = document.createElement('table');
// append the table into the div
main.appendChild(Table)
// this is the main function (class)
function Seattle(name, max, min, avg) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;
    // this array for store the cookies on it
    this.arr = [];
    this.cookies = 0;
    arrr.push(this);
    this.getRandomCostomer();
}

// this prototype for create a random number
Seattle.prototype.getRandomNumber = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
}

// here i complete the calculation of the cookies
Seattle.prototype.getRandomCostomer = function () {
    for (let i = 0; i < hours.length; i++) {
        var randomCostomerNom = this.getRandomNumber(this.min, this.max, this.avg);
        this.cookies = Math.ceil(randomCostomerNom * this.avg)
        this.arr.push(this.cookies)
    }
}

// here i drow the header of the table 
Seattle.prototype.header = function () {

    var tr = document.createElement('tr');
    Table.appendChild(tr);
    var tdNameLocation = document.createElement('th');
    tdNameLocation.textContent = ' ';
    tr.appendChild(tdNameLocation)
    for (let i = 0; i < hours.length; i++) {
        var td = document.createElement('th');
        td.textContent = hours[i]
        tr.appendChild(td)
    }
    let tdTotal = document.createElement('th');
    tdTotal.textContent = 'Total'
    tr.appendChild(tdTotal)
}

// here in this prototype i drow the content of the table and print the values
Seattle.prototype.content = function () {
    let trEle = document.createElement('tr');
    Table.appendChild(trEle);
    trEle.textContent = this.name;
    let sumTotlaCon = 0;
    for (var k = 0; k < this.arr.length; k++) {
        var tdrEl = document.createElement('td');
        trEle.appendChild(tdrEl);
        tdrEl.textContent = this.arr[k];
    }
    sumTotlaCon = this.arr.reduce((a, b) => (a + b))
    let tdTotlaCon = document.createElement('td');
    tdTotlaCon.textContent = sumTotlaCon;
    trEle.appendChild(tdTotlaCon)
}

// in this prototype i drow the footer of the table and print the value
Seattle.prototype.footer = function () {
    let trEleTotal = document.createElement('tr');
    Table.appendChild(trEleTotal)
    let tdEleTotal = document.createElement('td')
    trEleTotal.appendChild(tdEleTotal)
    tdEleTotal.textContent = 'Total';
    var totalCalculate = 0;
    for (let i = 0; i < hours.length; i++) {
        var calcCol = 0;
        for (let k = 0; k < arrr.length; k++) {
            calcCol += arrr[k].arr[i];
        }
        totalCalculate += calcCol;
        var tdEl = document.createElement('td');
        trEleTotal.appendChild(tdEl);
        tdEl.textContent = calcCol;
    }
    var tdElem = document.createElement('td');
    trEleTotal.appendChild(tdElem);
    tdElem.textContent = totalCalculate;
}

const  
    Seattl = new Seattle('Seattle', 65, 20, 6.3),
    Tokyo = new Seattle('Tokyo', 65, 20, 6.3),
    Dubai = new Seattle('Dubai', 65, 20, 6.3),
    Paris = new Seattle('Paris', 65, 20, 6.3),
    Lima = new Seattle('Lima', 65, 20, 6.3);

Seattle.prototype.header()
Seattl.content();
Tokyo.content();
Dubai.content();
Paris.content();
Lima.content();
Seattle.prototype.footer();

const
    name = document.getElementById('name'),
    max = document.getElementById('max'),
    min = document.getElementById('min'),
    avr = document.getElementById('avg');

// this function for create a new names on click the button
function getAll() {
    if(name.value == '' || max.value == '' || min.value == '' || avr.value == '') {
        alert('pls Fill your info')
    }else{
        let newData = new Seattle(name.value, max.value, min.value, avr.value)
        let removeRow = Table.rows.length;
        Table.deleteRow(removeRow - 1);
        newData.content();
        newData.footer();
        name.value = '';
        max.value = '';
        min.value = '';
        avr.value = '';
    }
}

// validation 

// const
//     check_name = document.getElementById('check-name'),
//     check_max = document.getElementById('check-max'),
//     check_min = document.getElementById('check-min'),
//     check_avg = document.getElementById('check-avg');

// let regName = /[a-z]/i;
// function checkName() {

// }

