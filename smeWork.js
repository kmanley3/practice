const returnString = (firstName, func) => {
    return func(firstName) + ", Yo what's up"
}

const addNums = str => {
    return str + "1234"
}

console.log(returnString("kirsten", addNums))

let obj = {
    name: "Kirsten",
    color: "red",
    hobby: "D&D"
} 
const {name} = obj

const [data] = arr
