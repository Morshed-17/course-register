import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

function App() {
  const [selectedCourses, setSelectedCourses] = useState([])
  const [remaining, setRemaining] = useState(0)
  const [totalCredit, setTotalCredit] = useState(0)
  const handleSelect = (card) => {
      let countCredit = card.credit
      let isExist = selectedCourses.find(item => item.id === card.id)
      if(isExist) {
       return alert('Already added')
      }else{
        selectedCourses.forEach(() => {
          countCredit += totalCredit
        } )
        if(countCredit > 20){
         return alert('Your credit limit reached')
        }else{
          
          setTotalCredit(countCredit)
          setRemaining(20 - countCredit)
          setSelectedCourses([...selectedCourses, card])
        }
        
      }
      
      
  }

  return (
    <div className='max-w-[1440px] mx-auto px-14'>
          <Header></Header>
          <div className='md:flex gap-6'>
            <Cards handleSelect={handleSelect}></Cards>
            <Cart selectedCourses={selectedCourses} totalCredit={totalCredit} remaining={remaining}></Cart>
          </div>
    </div>
  )
}

export default App
