import { useState, useEffect } from 'react'
import FilterForm from './FilterForm'
import FruitList from './FruitList'

export default function FilterContainer() {
    // shared state 
    const [fruits, setFruits] = useState([
        'pineapple',
        'mango',
        'banana',
        'apple',
        'kiwi',
        'pear',
        'strawberry'
    ])

    const [fruitInputValue, setFruitInputValue] = useState('')

    useEffect(() => {
        console.log(fruitInputValue)
        setFruitInputValue('')
    }, [fruits])

    const handleFruitChange = (e) => {
        setFruitInputValue(e.target.value)
    }
    const handleFruitSubmit = (e) => {
        e.preventDefault()
        const filteredFruit = fruits.filter(fruit => {
            return fruit != fruitInputValue
        })
        setFruits(filteredFruit)
    }
    return (
        <div className='container'>
            <FilterForm 
                handleFruitChange={handleFruitChange}
                fruitInputValue={fruitInputValue}
                handleFruitSubmit={handleFruitSubmit}
            />
            <FruitList fruits={fruits}/>
        </div>
    )
}
