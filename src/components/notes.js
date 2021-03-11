// css in index.css

// .filter-container {
//   display: flex;
//   justify-content: center;
//   background-color: lightblue;
// }

// .filter-form {
//   border: .3em solid green;
// }

// .fruit-list {
//   border: .3em solid purple;
// }


// step one create these files and stubs
export default function FilterForm() {
  return (
    <div className='filter-form'>
      hello from the filter form
      {/* the form will go here */}
    </div>
  )
} 

export default function List() {
  return (
    <div className='list'>
      hello from the list
      {/* the list will fgo here */}
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