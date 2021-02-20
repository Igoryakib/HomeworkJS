// const calculator = {
//     a: prompt('Введіть 1 число'),
//     b: prompt('Введіть 2 число'),

//     sum() {
        
//         const sum = Number(this.a) + Number(this.b);
//         return sum;
//     },

//     mult() {
//         const total = Number(this.a) * Number(this.b);
//         return total;
//     },
// };

const calculator = {
    read1(a) {
        a = prompt('Введіть 1 число');
        return Number(a);
    },

    read2(b) {
        b = prompt('Введіть 2 число');
        return Number(b);
    },

    sum() {
        
        const sum = this.read1() + this.read2();
        return sum;
    },

    mult() {
        const total = this.read1() * this.read2();
        return total;
    },
};

console.log('Сума -', calculator.sum());

console.log('Добуток - ', calculator.mult());