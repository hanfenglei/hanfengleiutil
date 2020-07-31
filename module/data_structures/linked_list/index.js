class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  getElementAt (position) {
    if (position < 0 || position >= this.length) {
      return null
    }

    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next
    }

    return current
  }

  append (element) {
    let node = new Node(element)

    if (this.head === null) {
      this.head = node
    }
    else {
      let current = this.getElementAt(this.length - 1)

      current.next = node
    }

    this.length++
  }

  insertAt (position, element) {
    if (position < 0 || position > this.length) {
      return false
    }

    let node = new Node(element)

    if (position === 0) {
      node.next = this.head
      this.head = node
    }
    else {
      let previous = this.getElementAt(position - 1)
      node.next = previous.next
      previous.next = node
    }

    this.length++
    return true
  }

  /* get element index */
  indexOf (element) {
    let current = this.head

    for (let i = 0; i < this.length; i++) {
      if (current.element === element) {
        return i
      }

      current = current.next
    }

    return -1
  }

  find (element) {
    let currNode = this.head

    while (currNode.element && (currNode.element != element)) {
      currNode = currNode.next
    }

    return currNode
  }

  findPrev (element) {
    let currNode = this.head

    while (currNode.next !== null && (currNode.next.element != element)) {
      currNode = currNode.next
    }

    return currNode
  }

  afterInsertSpecialElement (newElement, element) {
    let newNode = new Node(newElement)

    let currNode = this.find(element)

    newNode.next = currNode.next
    currNode.next = newNode

    return null
  }

  remove (element) {
    // 方法1:
    let index = this.indexOf(element)
    return this.removeAt(index)

    // 方法2:
    // let prevNode = this.findPrev(element)

    // if (prevNode.next && prevNode.next.element != "head") {
    //   prevNode.next.element = null
    // }

    // if (prevNode.next !== null) {
    //   prevNode.next = prevNode.next.next
    // }

    // return null
  }

  removeAt (position) {
    if (position < 0 || position > this.length) {
      return false
    }

    let current = this.head

    if (position === 0) {
      this.head = current.next
    }
    else {
      let previous = this.getElementAt(position - 1)
      current = previous.next
      previous.next = current.next
    }

    this.length--
    return current.element
  }

  getAllElementByArray () {
    let res = []
    let currNode = this.head

    while (currNode.next !== null) {
      res.push(currNode.next.element)
      currNode = currNode.next
    }

    return res
  }

  display () {
    let current = this.head
    let s = ''

    while (current) {
      let next = current.next

      next = next ? next.element : 'null'
      s += `[element: ${current.element}, next: ${next}]\n`
      current = current.next
    }

    return s
  }

  isEmpty () {
    // return this.head === null
    return this.length === 0
  }

  size () {
    return this.length
  }

  getHead () {
    return this.head
  }

  clear () {
    this.head = null
    this.length = 0
  }
}

module.exports = new LinkedList()
