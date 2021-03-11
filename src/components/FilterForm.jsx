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