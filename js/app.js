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
function Shope(name, max, min, avg) {
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
Shope.prototype.getRandomNumber = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min)
}

// here i complete the calculation of the cookies
Shope.prototype.getRandomCostomer = function () {
    for (let i = 0; i < hours.length; i++) {
        var randomCostomerNom = this.getRandomNumber(this.min, this.max, this.avg);
        this.cookies = Math.ceil(randomCostomerNom * this.avg)
        this.arr.push(this.cookies)
    }
}

// here i drow the header of the table 
function header() {

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
Shope.prototype.content = function () {
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
function footer() {
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
    Seattl = new Shope('Seattle', 65, 20, 6.3),
    Tokyo = new Shope('Tokyo', 65, 20, 6.3),
    Dubai = new Shope('Dubai', 65, 20, 6.3),
    Paris = new Shope('Paris', 65, 20, 6.3),
    Lima = new Shope('Lima', 65, 20, 6.3);

header();
Seattl.content();
Tokyo.content();
Dubai.content();
Paris.content();
Lima.content();
footer();


let inputs = document.getElementById('inputs')
inputs.addEventListener('submit', function(ev) {
    ev.preventDefault();
    var name = ev.target.name.value ;
    var min = parseInt(ev.target.min.value);
    var max = parseInt(ev.target.max.value );
    var avg = parseFloat(ev.target.avg.value);
    var newData = new Shope(name,max,min,avg);
    var rowCount = Table.rows.length;
    Table.deleteRow(rowCount-1);
    newData.content();
    footer();
    inputs.reset();
  });
