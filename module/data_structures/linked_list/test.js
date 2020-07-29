const list = require('./index.js')

list.insert('Apple', 'head')
list.insert('Banana', 'Apple')
list.insert('Pear', 'Banana')

console.log(list.display())


list.remove('Banana')
console.log(list.display())
