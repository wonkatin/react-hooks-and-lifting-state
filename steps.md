# Steps to achieve

## Counter

* first make counter
  * create components folder
  * touch Counter.jsx

```jsx
// useState needs to be imported
import { useState } from 'react' 

export default function Counter() {
  // setState hook returns state value and a function to set the value
  const [count, setCount] = useState(1)
  // do this one second as a demo of objects
  const [user, setUser] = useState({ user: 'Weston'})

  // handle button clicks
  const handleIncreaseCount = () => {
    setCount(count +1)
  }

  // function return gets rendered 
  return (
    <div>
      <h1>the user is {user.name}</h1>

      <h3>the count is {count}</h3>

      <button onClick={handleIncreaseCount}>Increase Count</button>
    </div>
  )
}
```

```jsx
  // useEffect happens after every render...
  useEffect(() =>{
    console.log('after every render', count)
    // ...the return runs on unmount like component will unmount
    return () => console.log('on every unmount')
  })

  // ...unless you pass it a variable
  useEffect(() => {
    console.log('after user mounts or changes ...')
    // array of dependencies
  }, [user])

  // ...or you tell it to only run once like component did mount
  useEffect(() => {
    console.log('just the first render!')
    return () => console.log('I never happen')
  }, [])
  ```

## Fruit Filter

* show things
  * diagram
  * wireframe it after diagram
* stub components
  * add css first to index.css

```css
.filter-container {
  display: flex;
  justify-content: center;
  background-color: lightblue;
}

.filter-form {
  border: .3em solid green;
}

.fruit-list {
  border: .3em solid purple;
}
```

* touch FilterContainer.jsx, FilterForm.jsx, FruitList.jsx

```jsx
export default function FilterForm() {
  return (
    <div className='filter-form'>
      hello from the filter form
      {/* the form will go here */}
    </div>
  )
} 

export default function FruitList() {
  return (
    <div className='fruit-list'>
      hello from the  fruit list
      {/* the list will go here */}
    </div>
  )
}

import FilterForm from './FilterForm.jsx'
import FruitList from './FruitList.jsx'

export default function Container() {
  return (
    <div className='container'>
      <FilterForm />
      <FruitList />
    </div>
  )
}

```

* add h1 of Fruit Filter to app.js when rendering `FilterContainer`
* add fruits to state in `FilterContainer` to be passed as props to `FruitList`

```jsx
import { useState } from 'react'

import FilterForm from './FilterForm.jsx'
import FruitList from './FruitList.jsx'

export default function FilterContainer() {
  // array of fruits held in state
  const [fruits, setFruits] = useState([
    'pineapple',
    'mango',
    'banana',
    'apple',
    'kiwi',
    'pear',
    'strawberry'
  ])

  return (
    <div className='filter-container'>
      <FilterForm />
      <FruitList fruits={fruits}/>
    </div>
  )
}
```

* render fruits in `FruitlLst.jsx`

```jsx
export default function FruitList(props) {
  // map the fruits to an array of list items
  const fruitListItems = props.fruits.map((fruit, index) => {
    return <li key={`fruit ${index}`}>{fruit}</li> 
  })

  return (
    <div className='fruit-list'>
      <ul>
        {fruitListItems}
      </ul>
    </div>
  )
}
```

* show computed styles in app.css
* fix css

```css
ul {
  text-align: left;
}
```


* make form in `FilterForm.jsx`

```jsx
export default function FilterForm(props) {
  return (
    <div className='filter-form'>
      <form onSubmit={props.handleSubmitFruit}>
        <label htmlFor='fruit-filter'>Fruit to Filter:</label>

        <input 
          type='text' 
          value={props.fruitInputValue}
          onChange={props.handleFruitChange} 
          placeholder='enter a fruit'
          id='fruit-filter' 
        />

        <input 
          type='submit'
          value='Submit Fruit'
        />
      </form>
    </div>
  )
} 
```

* center the form nicely

```css
.filter-form {
  border: .3em solid green;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

* update FilterContainer.jsx

```jsx
import { useState, useEffect } from 'react'

import FilterForm from './FilterForm.jsx'
import FruitList from './FruitList.jsx'

export default function FilterContainer() {
  // array of fruits held in state
  const [fruits, setFruits] = useState([
    'pineapple',
    'mango',
    'banana',
    'apple',
    'kiwi',
    'pear',
    'strawberry'
  ])
  // value of form input held in state
  const [fruitInputValue, setFruitInputValue] = useState('')

  // use effect says do something after render
  useEffect(() => {
    console.log('fruits in state:', fruits)
    setFruitInputValue('') 
  }, [fruits] /* this array tells useEffect what to render after */)

  // event handlers
  const handleFruitChange = e => setFruitInputValue(e.target.value)

  const handleSubmitFruit = e => {
    // stop form resubmission
    e.preventDefault()
    // remove any fruits that match the input
    const filteredFruit = fruits.filter(fruit => fruit !== fruitInputValue)
    // set state
    setFruits(filteredFruit)
  }

  return (
    <div className='filter-container'>
      <FilterForm
        handleFruitChange={handleFruitChange}
        fruitInputValue={fruitInputValue} 
        handleSubmitFruit={handleSubmitFruit}
      />
      <FruitList fruits={fruits}/>
    </div>
  )
}
```

