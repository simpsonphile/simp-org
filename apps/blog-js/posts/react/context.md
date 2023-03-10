---
title: Advanced React Context
description: this is advanced react context article
img: /static/context-api.webp
date: 26.01.2023
tags: 
  - react
  - context
  - state
---

Lets create context with default state:

```js
const initialState = {
  recipes: {},
};
const RecipesContext = React.createContext({ ...initialState });
```

## Custom hook
Instead of importing useContext and RecipesContext everywhere where we need access to context it's better to create custom hook. This way we have 1 import less and we have check that we are using hook inside context:

```js
export const useRecipes = () => {
  const context = React.useContext(RecipesContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
};
```

## Custom Provider
```js
  export const RecipesContextProvider = ({ children }) => {
    // we will implement logic later

    return (
      <RecipesContext.Provider value={{ state: { ...initialState } }}>
        {children}
      </RecipesContext.Provider>
    )
  }
```

## Adding logic to provider

```js
  const reducer = (state, action) => {
    const { type, payload } = action || {};
    switch (type) {
      case 'SET_RECIPES':
      return {
        ...state,
        recipes: payload,
      };
      case 'ADD_RECIPE':
        return {
          ...state,
          recipes: {
            ...state.recipes,
            [payload.id]: payload,
          }
        }
      default:
        return state;
    }
  }

  export const RecipesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <RecipesContext.Provider value={{ state, dispatch }}>
        {children}
      </RecipesContext.Provider>
    )
  }
```

## Adding action names

Currently the only way we can add recipe is by dispatching and action

```js

  const { state, dispatch } = useRecipes();

  dispatch({
    type: 'ADD_RECIPE',
    payload: {
      id: 10,
      title: 'pasta with egg',
      prepTime: 150,
      ...
    }
  })
```

there is few problems with it and we will cover one of them: you can make a typo in action type.

So its good idea to store action types in constants

```js
 export const ADD_RECIPE = 'ADD_RECIPE';
 export const SET_RECIPES = 'SET_RECIPES';

//......

const reducer = (state, action) => {
    const { type, payload } = action || {};
    switch (type) {
      //...
      case ADD_RECIPE:
        return {
          ...state,
          recipes: {
            ...state.recipes,
            [payload.id]: payload,
          }
        }
      default:
        return state;
    }
  }

//......

const { state, dispatch } = useRecipes();

  dispatch({
    type: ADD_RECIPE,
    payload: {
      id: 10,
      title: 'pasta with egg',
      prepTime: 150,
      ...
    }
  })
```

Now we will not make a typo but we have many imports to do thats why...


## Adding action creators

come for the rescue

```js
  // actions.js
  export const setRecipes = ({dispatch}) => (payload) => dispatch({
    type: SET_RECIPES,
    payload,
  })

  export const addRecipe = ({dispatch}) => (payload) => dispatch({
    type: ADD_RECIPE,
    payload,
  })
```


Add actions to provider

```js
  import bindContextToActions from './helpers/bindContextToActions.js';
  import * as actions from './actions.js';

  export const RecipesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <RecipesContext.Provider value={{ state, actions: bindContextToActions(actions, dispatch, () => state)  }}>
        {children}
      </RecipesContext.Provider>
    )
  }
```

BindContextToActions is helper that loops all actions and invoke them with dispatch and getState methods as args
```js
    const bindContextToActions = (actions, dispatch, getState) =>
      Object.fromEntries(
        Object.entries(actions).map(([name, func]) => [
          name,
          func({ dispatch, getState }),
        ])
      );
```

now in consumer
```js
const { state, actions: { addRecipe } } = useRecipes();

  addRecipe({
      id: 10,
      title: 'pasta with egg',
      prepTime: '150min',
      ...
    })
```

## More complex actions 

What if we want to make some async API call, wait for data and then make proper actions? It's simple

```js
  export const fetchRecipes = ({dispatch}) => () => {
    try {
      const result = await fetch('api/get/recipes');

      if (result.data.recipes) {
        setRecipes({ dispatch })(result.data.recipes)
      }
    } catch (e) {
      ...
    } finally {
      ...
    }
  }
```

Now in consumer

```js
  const { actions: { fetchRecipes }} = useRecipes();

  useEffect(() => {
    fetchRecipes();
  }, []);
```

##  don???t repeat similar actions - use basic reducer

Lets start with new example

```js
  const initialState = {
    game: {
      width: 1920,
      height: 1080,
      fps: 30,
    },
    status: 'idle',
    score: 15000,
    health: 100,
    name: 'player 1',
  }

  // actionNames.js
  export SET_GAME_WITH = 'SET_GAME_WITH';
  export SET_STATUS = 'SET_STATUS';
  export SET_SCORE = 'SET_SCORE';
  export SET_HEALTH = 'SET_HEALTH';
  export SET_NAME = 'SET_NAME';

  // reducer.js
  const reducer = (state, action) => {
    const { type, payload} = action;

    switch (type) {
      case SET_GAME_WITH:
        return {
          ...state,
          game: {
            ...state.game,
            width: payload,
          }
        }
      case SET_STATUS:
        return {
          ...state,
          status: payload,
        }
      case SET_SCORE:
        return {
          ...state,
          score: payload,
        }
      case SET_HEALTH:
        return {
          ...state,
          health: payload,
        }
      case SET_NAME:
        return {
          ...state,
          name: payload,
        }
    }
  }
```

As you can see we are repeating so much, only property name, and action type name changes (maybe except first case SET_GAME_WITH).
We can abstract it away:

```js
  // basicReducer.js
  const basicReducer = (state, action) => {
    const setRegExp = /set:(?<field>[A-Za-z]+)/;
    if (action.type.match(setRegExp)) {
      const {
        groups: { field },
      } = /set:(?<field>[A-Za-z]+)/.exec(action.type);
      return { ...state, [field]: action.payload };
    }

    return state;
  };

  export default basicReducer;
```


Now lets use it

First we need to change type names so basicReducer regexp will match

```js
// actionNames.js
export const SET_GAME_WITH = 'SET_GAME_WITH';
export const SET_STATUS = 'set:status';
export const SET_SCORE = 'set:score';
export const SET_HEALTH = 'set:health';
export const SET_NAME = 'set:name';


//reducer.js
const reducer = (state, action) => {
  const { type, payload} = action;

  switch (type) {
    case SET_GAME_WIDTH: 
      return {
        ...state,
        game: {
          ...state.game,
          width: payload,
        }
      }
    default basicReducer(state, action);
  }
}
```

## Add Immer to simplify reducer even more

[updating complex state](/updating-complex-state)

```js
  import produce from 'immer';

  const reducer = (state, action) => {
  const { type, payload} = action;

  switch (type) {
    case SET_GAME_WIDTH: 
      return produce(state, draft => {
        state.game.width = payload;
      })
    default basicReducer(state, action);
  }
}
```

## Add selectors 

Oftentimes we need something more than getting raw data from state like particular item with id from collection or in recipes example or one that is between some preparation time. Such logic can be put into selectors for reusability and to make our components separate from logic

example selectors where first returns recipe by id
and second that returns recipes that are between 30 to 60 cooking time:

```js
// selectors.js
export const selectRecipeById = (state) => (id) => state?.recipes?.[id];
export const selectRecipeByCookingTime = (state) => ({ minCookingTime, maxCookingTime }) => 
  state.recipes.filter(({ prepTime }) => prepTime >= minCookingTime && prepTime.maxCookingTime);
```

Now we can add selectors to our context so consumers can use them:
```js
// context.js
import bindContextToActions from './helpers/bindContextToActions.js';
import * as actions from './actions.js';
import * as selectors from './selectors.js';
export const RecipesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <RecipesContext.Provider value={{ 
      state,
      actions: bindContextToActions(actions, dispatch, () => state),
      selectors: bindContextToActions(selectors, dispatch, () => state)}}>
      {children}
    </RecipesContext.Provider>
  )
}
```

now in consumer:
```js
  const { selectors: getRecipeByCookingTime } = useRecipes();
  
  console.log(getRecipeByCookingTime({ minCookingTime: 30, maxCookingTime: 45 }));
```
## Performance Problems with complex contexts
react context rerenders every consumer when value passed to provider changes. This can slow down your UI.
### Split context to few smaller

good idea is to split context into few smaller ones. Lets imagine our context with recipes has additional recipeCategory property:
```js
  const initialState = {
    recipes: {},
    recipeCategories: {}
  }
```
Now imagine we have 2 components:
- one that renders single recipe
- second that renders all recipe categories
if recipes is modified all consumers will rerender: single recipe component and recipe categories component. This is unnecessary and could be omitted by splitting context to smaller cones.
### split context to state/selectors/actions
coming soon
### write proxy (like useSelector in redux)
proxy will accept dep array and rerender component only when dep array changed...
...coming soon
## automate writing contexts with plop.js
coming soon
## save context state in localstorage 
Add unique id to contextProvider as prop
Add onStateUpdateEnd method that runs after dispatch and saves new state in localstorage to context-${uniqueId} property
Add onContextLoaded method that checks and loads state from localstorage by context-${uniqueId} property
```js
```
## final toughs
I think that my contexts are to big. maybe some external package. ...coming soon
## Debug provider with react dev tools
coming soon