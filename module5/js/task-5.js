class Car {
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance, price.
     */

    static getSpecs(car) {
       return console.log(car);
    }
  
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor(objSettings) {
        const {speed = 0, price, maxSpeed, isOn = false, distance = 0} = objSettings;
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance;
    }
  
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */

    get price () {
        return this._price;
    }

    set price (item) {
        this._price = item;
    }
  
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this._isOn = true;
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }
  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        if(this._speed + value <= this._maxSpeed) {
           return this._speed += value;
        }
    }
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        if(this._speed - value >= 0) {
            return this._speed - value;
        }
    }
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if(this._isOn) {
           return this._distance = this._speed * hours;
        }
    }
  }
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
 
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000