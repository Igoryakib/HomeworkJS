const user = {
    userName: 'Igor',
    age: 14,
    showUserName() {
    console.log(this.userName);
    },
    updateAge(ageItem) {
        this.age += ageItem;
        return this.age;
    },
};

console.table(user);

user.showUserName();

console.log(user.updateAge(1));

 