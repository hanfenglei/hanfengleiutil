class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head')
  }

  find (item) {
    let currNode = this.head

    while (currNode.element && (currNode.element != item)) {
      currNode = currNode.next
    }

    return currNode
  }

  findPrev (item) {
    let currNode = this.head

    while (currNode.next !== null && (currNode.next.element != item)) {
      currNode = currNode.next
    }

    return currNode
  }

  afterInsertSpecialElement (newElement, item) {
    let newNode = new Node(newElement)

    let currNode = this.find(item)

    newNode.next = currNode.next
    currNode.next = newNode

    return null
  }

  remove (item) {
    let prevNode = this.findPrev(item)

    if (prevNode.next && prevNode.next.element != "head") {
      prevNode.next.element = null
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next
    }

    return null
  }

  display () {
    let res = []
    let currNode = this.head

    while (currNode.next !== null) {
      res.push(currNode.next.element)
      currNode = currNode.next
    }

    return res
  }
}

module.exports = new LinkedList()
