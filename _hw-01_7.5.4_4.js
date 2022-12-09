"use strict";

    function Device() {
        this.active = false
    };
    
    Device.prototype.switch = function(tumbler) {
        tumbler = tumbler.toLowerCase();
        if (tumbler == 'on') {
            this.active = true;
        } else if (tumbler == 'off') {
            this.active = false;
        }
    };

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

    function Toster(brand, power, place) {
        this.brand = brand,
        this.power = power,
        this.place = place,
        this.SCP_426 = function() {
            alert('Now you are a toster! :D')
        }
    }

    Toster.prototype = new Device;

    function Fridge(brand, power, color, place) {
        this.brand = brand,
        this.power = power,
        this.color = color,
        this.place = place
    }

    Fridge.prototype = new Device;

    let iAmToster = new Toster('SCP', 404, 'Kitchen');
    let fridge = new Fridge('Indesit', 7, 'Silver', 'Kitchen');

    iAmToster.switch('On');
    fridge.switch('ON');

    console.log(iAmToster);
    console.log(fridge);
    console.log(electricity(iAmToster, fridge));
