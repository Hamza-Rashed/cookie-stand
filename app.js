'use strict'


let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let contentData = document.getElementById('seattle');

let seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avg: 6.3,
    cust_hour: 0,
    cookies_hour: [],
    total_cookies: 0,
    get_cust_num: function () {
        this.cust_hour = getRandNum(this.min, this.max);
    },
    get_all_cookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.get_cust_num();
            let resultCookies = Math.ceil(this.cust_hour * this.avg);
            this.cookies_hour.push(resultCookies);
            this.total_cookies += this.cookies_hour[i];
        }

    },
    render: function () {
        let h1EleHeader = document.createElement('h1')
        contentData.appendChild(h1EleHeader)
        h1EleHeader.textContent = `Seattle`
        let ulEleHours = document.createElement('ul');
        contentData.appendChild(ulEleHours);
        for (let j = 0; j < hours.length; j++) {
            let liEleCookies = document.createElement('li');
            ulEleHours.appendChild(liEleCookies);
            liEleCookies.textContent = `${hours[j]}: ${this.cookies_hour[j]}`;
        }
        let h2EleTotal = document.createElement('h2');
        ulEleHours.appendChild(h2EleTotal);
        h2EleTotal.textContent = `Total: ${this.total_cookies}`;

    }
}
let tokyo = {
    name: 'Tokyo',
    min: 23,
    max: 65,
    avg: 6.3,
    cust_hour: 0,
    cookies_hour: [],
    total_cookies: 0,
    get_cust_num: function () {
        this.cust_hour = getRandNum(this.min, this.max);
    },
    get_all_cookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.get_cust_num();
            let resultCookies = Math.ceil(this.cust_hour * this.avg);
            this.cookies_hour.push(resultCookies);
            this.total_cookies += this.cookies_hour[i];
        }

    },
    render: function () {
        let h1EleHeader = document.createElement('h1')
        contentData.appendChild(h1EleHeader)
        h1EleHeader.textContent = `Tokyo`
        let ulEleHours = document.createElement('ul');
        contentData.appendChild(ulEleHours);
        for (let j = 0; j < hours.length; j++) {
            let liEleCookies = document.createElement('li');
            ulEleHours.appendChild(liEleCookies);
            liEleCookies.textContent = `${hours[j]}: ${this.cookies_hour[j]}`;
        }
        let h2EleTotal = document.createElement('h2');
        ulEleHours.appendChild(h2EleTotal);
        h2EleTotal.textContent = `Total: ${this.total_cookies}`;

    }
}

let dubai = {
    name: 'Dubai',
    min: 23,
    max: 65,
    avg: 6.3,
    cust_hour: 0,
    cookies_hour: [],
    total_cookies: 0,
    get_cust_num: function () {
        this.cust_hour = getRandNum(this.min, this.max);
    },
    get_all_cookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.get_cust_num();
            let resultCookies = Math.ceil(this.cust_hour * this.avg);
            this.cookies_hour.push(resultCookies);
            this.total_cookies += this.cookies_hour[i];
        }

    },
    render: function () {
        let h1EleHeader = document.createElement('h1')
        contentData.appendChild(h1EleHeader)
        h1EleHeader.textContent = `Dubai`
        let ulEleHours = document.createElement('ul');
        contentData.appendChild(ulEleHours);
        for (let j = 0; j < hours.length; j++) {
            let liEleCookies = document.createElement('li');
            ulEleHours.appendChild(liEleCookies);
            liEleCookies.textContent = `${hours[j]}: ${this.cookies_hour[j]}`;
        }
        let h2EleTotal = document.createElement('h2');
        ulEleHours.appendChild(h2EleTotal);
        h2EleTotal.textContent = `Total: ${this.total_cookies}`;

    }
}

let paris = {
    name: 'Paris',
    min: 23,
    max: 65,
    avg: 6.3,
    cust_hour: 0,
    cookies_hour: [],
    total_cookies: 0,
    get_cust_num: function () {
        this.cust_hour = getRandNum(this.min, this.max);
    },
    get_all_cookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.get_cust_num();
            let resultCookies = Math.ceil(this.cust_hour * this.avg);
            this.cookies_hour.push(resultCookies);
            this.total_cookies += this.cookies_hour[i];
        }

    },
    render: function () {
        let h1EleHeader = document.createElement('h1')
        contentData.appendChild(h1EleHeader)
        h1EleHeader.textContent = `Paris`
        let ulEleHours = document.createElement('ul');
        contentData.appendChild(ulEleHours);
        for (let j = 0; j < hours.length; j++) {
            let liEleCookies = document.createElement('li');
            ulEleHours.appendChild(liEleCookies);
            liEleCookies.textContent = `${hours[j]}: ${this.cookies_hour[j]}`;
        }
        let h2EleTotal = document.createElement('h2');
        ulEleHours.appendChild(h2EleTotal);
        h2EleTotal.textContent = `Total: ${this.total_cookies}`;

    }
}

let lima = {
    name: 'Lima',
    min: 23,
    max: 65,
    avg: 6.3,
    cust_hour: 0,
    cookies_hour: [],
    total_cookies: 0,
    get_cust_num: function () {
        this.cust_hour = getRandNum(this.min, this.max);
    },
    get_all_cookies: function () {
        for (let i = 0; i < hours.length; i++) {
            this.get_cust_num();
            let resultCookies = Math.ceil(this.cust_hour * this.avg);
            this.cookies_hour.push(resultCookies);
            this.total_cookies += this.cookies_hour[i];
        }

    },
    render: function () {
        let h1EleHeader = document.createElement('h1')
        contentData.appendChild(h1EleHeader)
        h1EleHeader.textContent = `Lima`
        let ulEleHours = document.createElement('ul');
        contentData.appendChild(ulEleHours);
        for (let j = 0; j < hours.length; j++) {
            let liEleCookies = document.createElement('li');
            ulEleHours.appendChild(liEleCookies);
            liEleCookies.textContent = `${hours[j]}: ${this.cookies_hour[j]}`;
        }
        let h2EleTotal = document.createElement('h2');
        ulEleHours.appendChild(h2EleTotal);
        h2EleTotal.textContent = `Total: ${this.total_cookies}`;

    }
}



seattle.get_all_cookies();
seattle.render();
tokyo.get_all_cookies();
tokyo.render();
dubai.get_all_cookies();
dubai.render();
paris.get_all_cookies();
paris.render();
lima.get_all_cookies();
lima.render();


function getRandNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + 1));

}