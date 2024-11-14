const hello = 'hello world'
const boolean = 'hello boolean'
const arg = process.argv
const newArg = []


for(i= 2 ; i <arg.length; i++){
    newArg.push(arg[i])
}


console.log(`${boolean} ${newArg}`)
