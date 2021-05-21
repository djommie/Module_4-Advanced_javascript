let person = {
    name: 'Jimmy',
    age: 31,
    evaluations: [7, 10, 9]
}

let array = []

array[0] = 'groen'
array[1] = 'blauw'
array[2] = 'rood'

console.log(person)
console.log(person.name, person['name'])
console.log(person.age, person['age'])
console.log(person.evaluations)
console.log(array.length)
console.log(array[0])
console.log(array[array.length - 1])
array.push('geel')
array.push(5)
array.push({ greeting: "Hi, ik ben een object" })
console.log(array[array.length - 1].greeting)