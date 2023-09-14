import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1440px] mx-auto py-14'>
          <Header></Header>
          <div className='md:flex gap-6'>
            <Cards></Cards>
            <Cart></Cart>
          </div>
    </div>
  )
}

export default App
