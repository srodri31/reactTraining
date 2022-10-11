const person1 = {
    name: "Santiago",
    lastName: "Rodriguez",
    age: 25,
    gender: "male",
    city: "Medellin",
    job: "Software developer"
}

const person2 = {
    age: 15,
    gender: "female",
    city: "Sidney",
}

/// Example: From person1 get his age and city and print them to the console separated by commas

const { age, city } = person1
console.log(` ${age}, ${city}`)

// a. From person 2 get its name (if it doesn't have name default to "Anonymous")

const {} = person2
//....

// b. From person 1 store its job in a const called "personJob" and print it to the console

const {} = person1
//....


// c. From person 1 get its lastName, and store the rest of its properties in a new object called "copyPerson1"

const {} = person1
//....