---
title: Proper data structure
description: this is advanced react context article
img: /static/context-api.webp
date: 28.01.2023
---

## Use hash map instead of array for collections that need to return single objects

```js
// example 1
const books = [
  { id: 10, title: 'Some book', description: '100000' },
  { id: 20, title: 'Some book', description: '100000' },
  { id: 11, title: 'Some book', description: '100000' },
  ...
]
// example 2
const books = {
  10: { id: 10, title: 'Some book', description: '100000' },
  20: { id: 20, title: 'Some book', description: '100000' },
  11: { id: 11, title: 'Some book', description: '100000' },
  ...
}
```

to get element with specific id in first example you have few options:

### a) loop collection o(n)

```js
const getBookById = (books, id) => books.find((book) => book.id === id)
```

### b) convert to hashmap by Object.fromEntries
```js
const getBookById = (books, id) => Object.fromEntries(books.map((book) => [book.id, book]))[id];
```

### c) convert to hashmap by keyBy from lodash

same thing why waste time to implement it by yourself when:
```js
const getBookById = (books, id) => keyBy(books, 'id')[id];
```

second example:

```js
  const getBookById = (books, id) => books[id];
  // yeah xd
```

ok but what if we need to loop/map/sort our collection?

```js
  // todo vanilla
  // todo lodash
```

### use entityAdapter



## How to structure your hashmaps

```js
  const post = {
    
  }
```