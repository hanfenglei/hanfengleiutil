function isNum (param) {
  return Object.prototype.toString.call(param) === "[object Number]"
  // return ("number" == typeof (param))
}

function isString (param) {
  return Object.prototype.toString.call(param) === "[object String]"
  // return ("string" == typeof (param))
}

function isUndefined (param) {
  return Object.prototype.toString.call(param) === "[object Undefined]"
}

function isBoolean (param) {
  return Object.prototype.toString.call(param) === "[object Boolean]"
  // return ("boolean" == typeof (param))
}

function isObject (param) {
  return Object.prototype.toString.call(param) === "[object Object]"
  // return (typeof (param) == "object" && true != Array.isArray(param))
}

function isArray (param) {
  return Object.prototype.toString.call(param) === "[object Array]"
  // return Array.isArray(param)
}

function isFunction (param) {
  return Object.prototype.toString.call(param) === "[object Function]"
  // return ("function" == typeof (param))
}

module.exports = {
  isNum,
  isString,
  isUndefined,
  isBoolean,
  isObject,
  isArray,
  isFunction,
}
