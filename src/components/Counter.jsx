import { useState, useEffect } from 'react'

export default function Counter() {
    // useState hook returns state value and a fuction to set the value
    const [count, setCount] = useState(1)
    //example of having an object
    const [user, setUser] = useState({ name: 'Sarah'})
    //event handlers
    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log('after every render')
        console.log(count)
        return () => {
            console.log('on every unmount')
        }
    })

    useEffect(() => {
        console.log('userchanges')
    }, [user])

    useEffect(() => {
        console.log('i only run once')
    }, [])
    return (
        <div>
            <h1>Hello Functional Components!</h1>
            <h2>the count is {count}</h2>
            <h3>Hello {user.name}</h3>
            <button onClick={handleIncreaseCount}>Increase the Count!!!</button>
        </div>
    )
}