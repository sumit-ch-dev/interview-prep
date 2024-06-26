<!-- common question in javascript -->

### 1. what are some ways to declare an object in javascript?

There are multiple ways to declare an object in JavaScript. The most common ways are:

1. **Object Literals**: This is the most common way to create objects in JavaScript. It involves defining the object properties within curly braces `{}`.

    ```javascript
    const person = {
        name: 'John Doe',
        age: 30,
    };
    ```

2. **Constructor Functions**: Constructor functions are used to create multiple instances of an object with the same properties and methods.

    ```javascript
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    const john = new Person('John Doe', 30);
    ```

3. **Object.create()**: The `Object.create()` method creates a new object with the specified prototype object and properties.

    ```javascript
    const person = Object.create({
        name: 'John Doe',
        age: 30,
    });

    console.log(person.name); // John Doe
    ```

4. **Class Syntax**: ES6 introduced the class syntax for creating objects in JavaScript.

    ```javascript

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    const john = new Person('John Doe', 30);
    ```

5. **Factory Functions**: Factory functions are functions that return objects.

    ```javascript
    function createPerson(name, age) {
        return {
            name,
            age,
        };
    }

    const john = createPerson('John Doe', 30);
    ```


<!-- common question in javascript -->

<!-- constructor functions -->

### 2. What are constructor functions in JavaScript?

Constructor functions are a way to create objects in JavaScript. They are similar to classes in other programming languages. Constructor functions are used to create multiple instances of an object with the same properties and methods.

Here is an example of a constructor function in JavaScript:

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John Doe', 30);
```

In the example above, `Person` is a constructor function that takes `name` and `age` as parameters and assigns them to the object using the `this` keyword. The `new` keyword is used to create a new instance of the `Person` object.

Constructor functions can also have methods that are shared across all instances of the object. Here is an example:

```javascript

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person('John Doe', 30);

john.greet(); // Hello, my name is John Doe
```

In the example above, the `greet` method is added to the `Person` prototype, which allows all instances of the `Person` object to access the method.

<!-- constructor functions -->


<!-- object literals -->

### 3. What are object literals in JavaScript?

Object literals are a way to create objects in JavaScript by defining the object properties within curly braces `{}`. They are the most common way to create objects in JavaScript.

Here is an example of an object literal in JavaScript:

```javascript

const person = {
    name: 'John Doe',
    age: 30,
};

console.log(person.name); // John Doe

```

In the example above, `person` is an object created using object literals with properties `name` and `age`. Object literals are a simple and concise way to create objects in JavaScript.

<!-- object literals -->


<!-- object.create() -->

### 4. What is `Object.create()` in JavaScript?

`Object.create()` is a method in JavaScript that creates a new object with the specified prototype object and properties. It allows you to create objects that inherit properties from another object.

Here is an example of using `Object.create()` in JavaScript:

```javascript

const person = Object.create({
    name: 'John Doe',
    age: 30,
});

console.log(person.name); // John Doe

```

In the example above, `person` is an object created using `Object.create()` with a prototype object that has properties `name` and `age`. The `person` object inherits these properties from the prototype object.

`Object.create()` is a powerful way to create objects in JavaScript and allows for prototypal inheritance.

<!-- object.create with a custom object -->

```javascript

const personPrototype = {
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

const person = Object.create(personPrototype);

person.name = 'John Doe';

person.greet(); // Hello, my name is John Doe

```

<!-- object.create() -->


<!-- class syntax -->

### 5. What is the class syntax in JavaScript?

The class syntax in JavaScript is a way to create objects using a class-like syntax

Here is an example of using the class syntax in JavaScript:

```javascript

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const john = new Person('John Doe', 30);

john.greet(); // Hello, my name is John Doe

```

In the example above, `Person` is a class that has a constructor method to initialize the object with `name` and `age` properties. It also has a `greet` method that is shared across all instances of the `Person` class.

The class syntax in JavaScript provides a more familiar way to create objects for developers coming from other programming languages.

<!-- class syntax -->

<!-- factory functions -->

### 6. What are factory functions in JavaScript?

Factory functions are functions that return objects. They are a way to create objects in JavaScript without using the `new` keyword or constructor functions.

Here is an example of a factory function in JavaScript:

```javascript


// factory functions

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

const circle = createCircle(1);

console.log(circle);

// constructor functions

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(1);

console.log(circle2);

// difference between factory and constructor functions

// factory functions
// - return an object
// - no need to use the new keyword
// - can have multiple instances

// constructor functions
// - use the new keyword
// - can have multiple instances
// - can have prototype methods


// constructor functions with prototype methods

function Circle2(radius) {
    this.radius = radius;
}

Circle2.prototype.draw = function() {
    console.log('draw');
}

const circle3 = new Circle2(1);

console.log(circle3);

// difference between prototype and instance members

// prototype members

// - are shared among all instances of the object
// - are defined outside the constructor function
// - are defined using the prototype property of the constructor function


// instance members

// - are unique to each instance of the object
// - are defined inside the constructor function
// - are defined using the this keyword

```

In the example above, `createCircle` is a factory function that returns an object with `radius` and `draw` properties. Factory functions are a simple and flexible way to create objects in JavaScript.

<!-- factory functions -->


<!-- inheritance -->

### 7. What is inheritance in JavaScript?

Inheritance is a way to create a new object that inherits properties and methods from an existing object. It allows you to reuse code and create a hierarchy of objects.

In JavaScript, inheritance can be achieved using prototype chaining or ES6 classes.

Here is an example of inheritance using prototype chaining:

```javascript

function Shape(color) {
    this.color = color;
}

Shape.prototype.draw = function() {
    console.log('draw');
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
    console.log('draw circle');
}

const circle = new Circle(1, 'red');

circle.draw(); // draw circle

function User(username, email) {
    this.username = username;
    this.email = email;
}

User.prototype.login = function () {
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function () {
    console.log(`${this.username} has logged out`);
    return this;
}

function Admin(username, email, title) {
    User.call(this, username, email);
    this.title = title;
}

Admin.prototype = Object.create(User.prototype);


Admin.prototype.deleteUser = function () {
    // delete user
}


const userOne = new User('mario', 'mario@gmail.com');

const userTwo = new Admin('luigi', 'luigi@gmail.com', 'black-belt-ninja');

console.log(userOne, userTwo);


// this are the examples of prototype inheritance in javascript

```

In the example above, `Shape` is a constructor function that defines a `draw` method. `Circle` is a constructor function that inherits from `Shape` using prototype chaining. The `Circle` constructor calls the `Shape` constructor using `Shape.call(this, color)` to initialize the `color` property.

Inheritance is a powerful feature of JavaScript that allows you to create complex object hierarchies and reuse code effectively.

<!-- inheritance -->


<!-- call, apply and bind -->

### 8. What are `call`, `apply`, and `bind` in JavaScript?

`call`, `apply`, and `bind` are methods in JavaScript that are used to set the value of `this` in a function and call that function with a specified context.

1. **`call`**: The `call` method is used to call a function with a specified `this` value and arguments provided individually.

    ```javascript

    function greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    const person = {
        name: 'John Doe',
    };

    greet.call(person); // Hello, my name is John Doe

    ```

2. **`apply`**: The `apply` method is similar to `call`, but it takes arguments as an array.

    ```javascript

    function greet(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }

    const person = {
        name: 'John Doe',
    };

    greet.apply(person, ['Hello']); // Hello, my name is John Doe

    ```

3. **`bind`**: The `bind` method is used to create a new function with a specified `this` value and arguments provided individually.

    ```javascript

    function greet(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }

    const person = {
        name: 'John Doe',
    };

    const greetPerson = greet.bind(person);

    greetPerson('Hello'); // Hello, my name is John Doe


    // more examples for call, apply and bind

    const person = {
        name: 'John Doe',
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };

    const anotherPerson = {
        name: 'Jane Doe',
    };

    person.greet.call(anotherPerson); // Hello, my name is Jane Doe

    person.greet.apply(anotherPerson); // Hello, my name is Jane Doe

    const greetJane = person.greet.bind(anotherPerson);

    greetJane(); // Hello, my name is Jane Doe


    // apply with an array

    function sum(a, b) {
        return a + b;
    }

    const numbers = [1, 2];

    console.log(sum.apply(null, numbers)); // 3

    // bind with arguments

    function greet(greeting) {
        console.log(`${greeting}, my name is ${this.name}`);
    }

    const person = {
        name: 'John Doe',
    };

    const greetPerson = greet.bind(person, 'Hello');

    greetPerson(); // Hello, my name is John Doe


    // bind with event listeners

    const button = document.getElementById('button');

    function handleClick(event) {
        console.log('Button clicked');
        console.log(this); // button element
    }

    button.addEventListener('click', handleClick);

    const boundHandleClick = handleClick.bind(button);

    button.addEventListener('click', boundHandleClick);

    // bind with setTimeout

    function logMessage() {
        console.log('Hello, world!');
    }

    setTimeout(logMessage.bind(null), 1000);

    ```
<!-- call, apply and bind -->



