'use strict';

const Arr2 = [true, 2, {}, ["a"], 222];

for (const Arr of Arr2) {
    console.log('Елементи масиву і їх типи', typeof Arr);
}

const result = Arr2.forEach(item => console.log(typeof item));
