"use strict";

class Device {
    constructor(active) {
        this.active = false;
    }

    switch(tumbler) {
        tumbler = tumbler.toLowerCase();
        if (tumbler == 'on') {
            this.active = true;
        } else if (tumbler == 'off') {
            this.active = false;
        }
    }
};

class Toster extends Device {
    constructor(brand, power, place, active) {
        super(active);
        this.brand = brand;
        this.power = power;
        this.place = place;
    }

    SCP_426() {
        alert('Now you are a toster! :D')
    }
};

class Fridge extends Device {
    constructor(brand, power, color, place, active) {
        super(active);
        this.brand = brand;
        this.power = power;
        this.color = color;
        this.place = place;
    }
};

let iAmToster = new Toster('SCP', 404, 'Kitchen');
let fridge = new Fridge('Indesit', 7, 'Silver', 'Kitchen');

iAmToster.switch('On');
fridge.switch('ON');

function electricity (obj1, obj2) {
    let consumption = 0;

    if (obj1.active == true) {
        consumption += obj1.power;
    }
    if (obj2.active == true) {
        consumption += obj2.power;
    }

    return `Electricity consumption for now is ${consumption} kWh`;
}

console.log(iAmToster);
console.log(fridge);
console.log(electricity(iAmToster, fridge))
