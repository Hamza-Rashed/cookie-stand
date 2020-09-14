
'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let arr = [];

function Seattle(name, max, min, avg) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.avg = avg;
}

Seattle.prototype.getRandomCostomer = function () {
    var randomCostomerNom = getRandomNumber(this.min, this.max, this.avg);
    arr.push(randomCostomerNom)
    console.log(arr)
    return randomCostomerNom;
}
Seattle.prototype.render = function () {
    var main = document.getElementById('store');
    var ul = document.createElement('ul');
    main.appendChild(ul);
    for (let i = 0; i < hours.length; i++) {
        var liEle = document.createElement('li');
        liEle.textContent = hours[i]
        ul.appendChild(liEle)
        var spanEle = document.createElement('span');
        spanEle.textContent = ' : ' + this.getRandomCostomer() + ' cookies';
        liEle.appendChild(spanEle);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = 'Total'
    ul.appendChild(liTotal)
    let spanTot = document.createElement('span');
    let totalF = arr.reduce((a, b) => a + b)
    spanTot.textContent = " : " + totalF + " cookies";
    liTotal.appendChild(spanTot)

}

function getRandomNumber(min, max, avg) {
    var random = Math.floor(Math.random() * (max - min + 1) + min) // 0 - 1
    var secondRandom = Math.ceil(random * avg)
    return secondRandom;
}

let de = new Seattle('hamza', 65, 20, 6.3);
de.render();