// useState needs to be imported
import { useState, useEffect } from 'react' 

export default function Counter() {
  // setState hook returns state value and a function to set the value
  const [count, setCount] = useState(1)
  const [user] = useState({ name: 'Weston'})

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

  // handle button clicks
  const handleIncreaseCount = () => {
    setCount(count + 1)
  }

  // function return gets rendered 
  return (
    <div>
      <h1>My First Functional Component</h1>
      <h2>the user is {user.name}</h2>

      <h3>the count is {count}</h3>

      <button onClick={handleIncreaseCount}>Increase Count</button>
    </div>
  )
}