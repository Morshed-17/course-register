import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const handleSelect = (card) => {
      const isExist = selectedCourses.find(item => item.id === card.id)
      if(isExist) {
        alert('Already added')
      }else{
        setSelectedCourses([...selectedCourses, card])
      }
      
      
  }

  return (
    <div className='max-w-[1440px] mx-auto px-14'>
          <Header></Header>
          <div className='md:flex gap-6'>
            <Cards handleSelect={handleSelect}></Cards>
            <Cart selectedCourses={selectedCourses}></Cart>
          </div>
    </div>
  )
}

export default App
