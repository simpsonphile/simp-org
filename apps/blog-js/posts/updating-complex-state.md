```js
  const state = {
    lvl1: {
      prop1: 'value',
      lvl2: {
        prop1: 'olo',
        lvl3: {
          prop1: 'olo'
        }
      }
    }
  }
```


```js

const mutatedState = {
  ...state,
  lvl1: {
    ...state.lvl1,
    lvl2: {
      ...state.lvl2,
      prop1: 'new value'
    }
  }
}

```


```js
  import produce from 'immer';

  const mutatedState = produce(state, draft => {
    state.lvl1.lvl2.prop1 = 'new value';
  })
   
```