import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1440px] mx-auto py-14'>
          <Header></Header>
          <div>
            <Cards></Cards>
          </div>
    </div>
  )
}

export default App
