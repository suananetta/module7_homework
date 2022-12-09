"use strict";

    let parent = {
        fam: 'numbers'
    };

    let obj = Object.create(parent);

    obj.first = 1;
    obj.second = 2;
    obj.third = 3;

    function revision(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                console.log(`Ключ: ${key}, значение: ${obj[key]}`)
            };
        }
    };

    revision(obj);