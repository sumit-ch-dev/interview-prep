const person = {
    name: 'John Doe',
    age: 25,
    location: 'USA'
}

for (const key in person) {
    console.log(key, person[key]);
}