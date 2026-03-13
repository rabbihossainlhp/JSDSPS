# JSDS: JavaScript Data Structures & Algorithms

A hands-on JavaScript learning journal — built day by day, topic by topic.

## About

This repo tracks my journey through core data structures, algorithms, and LeetCode problems using vanilla JavaScript. Every folder is a topic, every file is a session. No shortcuts — everything is built from scratch.

---

## Repository Structure

```
JSDS/
├── initial.js              # Core algorithm practice (primes, factorial, etc.)
├── leetcode.js             # LeetCode problem solutions
├── New_array/
│   └── array.js            # Array methods and operations
├── Linked_list/
│   ├── linked_list.js      # Singly linked list (push, pop, ...)
│   └── Doubly_linkedlist.js# Doubly linked list
├── Stack/
│   └── stack.js            # Custom stack (push, pop)
├── Queue/
│   └── queue.js            # Custom queue (enqueue, dequeue)
├── Hash/
│   └── hashTable.js        # Hash table with chaining (set, get)
├── Tree/
│   └── Binary_search_tree.js # BST (in progress)
└── TaskCh/
    ├── challenge.js        # Standalone challenges
    └── DD-mon-YY.js        # Daily coding challenges
```

---

## Data Structures Implemented

| Structure | File | Methods |
|---|---|---|
| Array | `New_array/array.js` | Custom array operations |
| Singly Linked List | `Linked_list/linked_list.js` | `push`, `pop` |
| Doubly Linked List | `Linked_list/Doubly_linkedlist.js` | — |
| Stack | `Stack/stack.js` | `push`, `pop` |
| Queue | `Queue/queue.js` | `enqueue`, `dequeue` |
| Hash Table | `Hash/hashTable.js` | `set`, `get` (with chaining) |
| Binary Search Tree | `Tree/Binary_search_tree.js` | (in progress) |

---

## Algorithms & Concepts

- Prime number finder
- Factorial calculator
- Sum of digits
- Find max & min in an array
- Print array in reverse
- Recursion (find max via recursion)

---

## LeetCode Problems Solved

| # | Problem | File |
|---|---|---|
| 1 | Add Digits | `leetcode.js` |
| 2 | Number Complement | `leetcode.js` |
| 3 | Running Sum of 1D Array | `leetcode.js` |
| 4 | Richest Customer Wealth | `leetcode.js` |

---

## Daily Task Challenges (`TaskCh/`)

Daily practice files starting from **Feb 26, 2026**. Each file contains focused problems worked on that day.

| Date | Topic |
|---|---|
| Feb 26 | Array basics |
| Feb 27 | Array practice |
| Mar 03–13 | Mixed DSA challenges |
| Mar 14 | Recursion — `findMax` in array |

---

## How to Run

```bash
# Clone the repo
git clone <repo-url>
cd JSDS

# Run any file
node initial.js
node leetcode.js
node Stack/stack.js
node TaskCh/14-mar-26.js
```

---

## Goals

- [x] Build all core data structures from scratch
- [x] Solve beginner LeetCode problems
- [x] Daily challenge habit (ongoing since Feb 26)
- [ ] Complete Binary Search Tree (insert, search, traversal)
- [ ] Add graph data structure
- [ ] Reach 20+ LeetCode problems solved
- [ ] Add recursion challenges folder