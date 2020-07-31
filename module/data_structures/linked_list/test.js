const linkedList = require('./index.js')

linkedList.append(10)
linkedList.append(15)
linkedList.append(20)

console.log(linkedList.display())

linkedList.insertAt(0, 9)
linkedList.insertAt(2, 11)
linkedList.insertAt(5, 25)
console.log(linkedList.display())

console.log(linkedList.removeAt(0))
console.log(linkedList.removeAt(1))
console.log(linkedList.removeAt(3))
console.log(linkedList.display())

console.log(linkedList.indexOf(20))

linkedList.remove(20)

console.log(linkedList.display())

linkedList.clear()
console.log(linkedList.size())
