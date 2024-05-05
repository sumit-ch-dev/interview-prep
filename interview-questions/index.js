const person = {
    name: 'John Doe',
    age: 25,
    location: 'USA'
}


function Person(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
}

const p = new Person('John Doe', 25, 'USA');

console.log(p);

// const p2 = Object.create({
//     name: 'John Doe',
//     age: 25,
//     location: 'USA'
// })


// p2.name = 'Jane Doe';

// console.log(p2);


class Animal {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }
}

const a = new Animal('red', 'mammal');

for (const key of Object.keys(a)) {
    console.log(a[key]);
}

// object factory pattern

function createAnimal(name, type) {
    return {
        name, type
    }
}

const a2 = createAnimal('tiger', 'mammal');

console.log(a2);


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }

    add(p) {
        return {
            x: this.x + p.x,
            y: this.y + p.y
        }
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
console.log(p1.add(p2));

// difference between static and prototype methods

class Animal2 {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }

    static eat() {
        console.log('Animal eats');
    }
}

class Dog extends Animal2 {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}

const d = new Dog('Rex');
d.speak();
Dog.eat();

if (d instanceof Dog) {
    console.log('d is an instance of Dog');
}

try {
    d.eat();
} catch (error) {
    console.log(error);
}

// when a static function is declared in a class, it is not inherited by the child class
// static methods are called on the class itself, not on the instance of the class