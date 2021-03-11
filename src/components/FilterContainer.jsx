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
    // console.log('fruits in state:', fruits)
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