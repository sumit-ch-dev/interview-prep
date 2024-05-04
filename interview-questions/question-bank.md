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
