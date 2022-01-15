const judgeTypeMod = require('../judge/index.js')

function deepClone (data) {
  let obj

  if (judgeTypeMod.isArray(data)) {
    obj = []
    for (let i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]))
    }
  }
  else if (judgeTypeMod.isObject(data)) {
    //可保持继承链：如果obj中的对象是由构造函数生成的，则使用深拷贝后，会丢弃对象的constructor；
    obj = new data.constructor()

    for (let key in data) {
      obj[key] = deepClone(data[key])
    }
  }
  else {
    return data
  }

  return obj
}

module.exports = {
  deepClone
}




/**测试clone的代码 */
/*
//数据初始化
function Person (name) {
  this.name = name
}
const Jack = new Person('Jack')
const obj = {
  a: 1,
  b: function (arg) {
    console.log('复制函数')
  },
  c: {
    d: 3,
    e: {
      f: [1, [2, [3, [4, [5]]]]],
      g: {
        h: 5
      }
    }
  },
  date: [new Date(1536627600000), new Date(1540047600000)],
  reg: new RegExp('\\w+'),
  num: [NaN, Infinity, -Infinity],
  person: Jack,
}

let obj2 = deepClone(obj)
console.log(obj)
console.log(obj2)
obj.c.e.f = 1000
obj2.c.e.g.h = 2000
console.log(obj.c.e.f, obj2.c.e.f)
console.log(obj.c.e.g.h, obj2.c.e.g.h)
*/
