
const name = require('./names.js')


const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

sayHi("susan")
sayHi(name.john)
sayHi(name.peter)
