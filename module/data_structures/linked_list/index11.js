const { Comparator } = require("hanfengleiutil/module/utills/comparator")
const LinkedListNode = require('hanfengleiutil/module/data_structures/linked_list/linked_list_node')

class LinkedList {
  constructor(comparatorFunction) {
    this.head = null
    this.tail = null
    this.compare = new Comparator(comparatorFunction)
  }

  append (value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      console.log('nnnnnnnnnnnnnnnnn')
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  delete (value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        }
        else {
          currentNode = currentNode.next
        }
      }
    }

    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
  }

  find = (value) => new Promise((resolve, reject) => {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      if (!value) {
        return resolve(currentNode)
      }

      if (this.compare.equal(currentNode.value, value)) {
        return resolve(currentNode)
      }

      currentNode = currentNode.next
    }

    return null
  })

  deleteTail () {
    const deletedTail = this.tail

    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    let currentNode = this.head

    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      }
      else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }

  deleteHead () {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    }
    else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  fromArray (values) {
    values.forEach((value) => this.append(value))

    return this
  }

  toArray () {
    const nodes = []

    let currentNode = this.head

    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString (callback) {
    return this.toArray().map((node) => node.toString(callback)).toString()
  }

  reverse () {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      nextNode = currNode.next

      currNode.next = prevNode

      prevNode = currNode
      currNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}

module.exports = new LinkedList()
