# LinkedList Implementation in TypeScript

This project contains a TypeScript implementation of a LinkedList data structure. It includes a `NodeItem` class to represent each node in the list and a `LinkedList` class that implements the `LinkedLists` interface with various methods to manipulate the list.

## Features

- **TypeScript**: Strongly typed implementation for better maintainability and developer experience.
- **OOP Principles**: Follows object-oriented programming principles for clear structure and readability.

## Installation

To use the LinkedList class in your project, include the `LinkedList.ts` file and import the class:

```typescript
import LinkedList from './LinkedList';
```
Usage
Create a new instance of the LinkedList and use its methods to manipulate the list:

```typescript
const list = new LinkedList();
list.addFirst(10);
list.addLast(20);
list.deleteFirst();
console.log(list.contains(20)); // true
console.log(list.size()); // 1
```
The LinkedList class provides the following methods:

* addFirst(item: number): Adds a new item at the beginning of the list.
* addLast(item: number): Adds a new item at the end of the list.
* deleteFirst(): Removes the first item from the list.
* deleteLast(): Removes the last item from the list.
* contains(item: number): Checks if the list contains the specified item.
* indexOf(item: number): Returns the index of the specified item, or -1 if not found.
* size(): Returns the number of items in the list.
* toArray(): Converts the list into an array of numbers.
* Reverse(): Reverses the order of the list.
* getFromEnd(n: number): Grab nth item from end
