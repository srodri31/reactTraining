const primos = [2,3,5,7,11,17,19,23,27]

const people = [
    {name: "Santi", age: 25},
    {name: "Christian", age: 22},
    {name: "Alex", age: 30},
    {name: "Diego", age: 15},
    {name: "Maria", age: 40}
]

// example: validate if all numbers in primos array are positive

const allArePositive = primos.every((primo) => (
    primo > 0
))
console.log(allArePositive)

// a. sum all numbers in primos array


// b. sum all numbers less than 15 in primos array


// c. validate if at least one number in primos array is odd


// d. create a new array from people with only their names


// e. sum all tha ages from the items in the people array


// f. validate if all people in the people array are older than 18


// g. validate if at least one person in the people array is underage


// h. sum all the ages from the people that are younger than 35 in the people array