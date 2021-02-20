const cafe = {
    name: 'Republic',
    width: 200,
    height: 300,
    personal: 5,
    hr: true,

    getSquare(total) {
        total = this.width * this.height;
        return total;
    },
};

const entries = Object.entries(cafe);

for(const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    console.log(`Ключ ${key} - Значення ${value}`);
}

console.log(cafe.getSquare());