interface LinkedLists {
  addFirst: (item: number) => void;
  addLast: (item: number) => void;
  deleteFirst: () => void;
  deleteLast: () => void;
  contains: (item: number) => boolean;
  indexOf: (item: number) => number;
  size: () => number;
  toArray: () => number[];
  Reverse: () => void;
  getFromEnd: (n: number) => void;
}
class NodeItem {
  public next: NodeItem | null = null;

  constructor(public value: number) {}
}

class LinkedList implements LinkedLists {
  private first: NodeItem | null = null;
  private last: NodeItem | null = null;
  private count: number = 0;

  addFirst(item: number) {
    const node = new NodeItem(item);

    if (this.first == null) this.last = this.first = node;
    else if (this.last) {
      node.next = this.first;
      this.first = node;
    }
    this.count++;
  }

  addLast(item: number) {
    const node = new NodeItem(item);
    if (this.first == null) this.last = this.first = node;
    else if (this.last) {
      this.last.next = node;
      this.last = node;
    }
    this.count++;
  }

  indexOf(item: number) {
    let index = 0;
    let current = this.first;
    while (current !== null) {
      if (current.value == item) return index;
      current = current.next!;
      index++;
    }
    return -1;
  }

  contains(item: number) {
    return this.indexOf(item) !== -1;
  }

  deleteFirst() {
    if (!this.first) throw new Error("no item for delete");
    if (this.first.next == null) {
      this.last = this.first = null;
      this.count = 0;
      return;
    }

    let second = this.first.next;
    this.first.next = null;
    this.first = second;
    this.count--;
  }

  deleteLast() {
    if (!this.first) throw new Error("no item for delete");

    if (this.first.next == null) {
      this.last = this.first = null;
      this.count = 0;
      return;
    }

    let previous = this.beforeLast(this.last);
    this.last = previous;
    if (this.last) this.last.next = null;
    this.count--;
  }

  size() {
    return this.count;
  }

  toArray() {
    let current = this.first;
    let myArray = [];

    while (current != null) {
      myArray.push(current.value);
      current = current.next;
    }
    return myArray;
  }

  Reverse() {
    let previous = this.first;
    let current = this.first?.next;
    while (current != null) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    this.last = this.first;
    if (this.first) this.first.next = null;
    this.first = previous;
  }

  getFromEnd(n: number) {
    if (!this.first) throw new Error("no item for find");

    let a = this.first;
    let b = this.first;

    for (let i = 0; i < n - 1; i++) {
      if (b.next == null) throw new Error("couldent find such an item");
      b = b.next;
    }
    while (b != this.last) {
      if (b.next !== null && a.next !== null) {
        a = a.next;
        b = b.next;
      }
    }

    return a?.value;
  }

  private beforeLast(item: NodeItem | null) {
    let current: NodeItem | null = this.first;

    while (current != null) {
      if (current.next == item) return current;
      current = current.next;
    }
    return null;
  }
}

export default LinkedList;
