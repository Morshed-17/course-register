import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Card from './Card'

const Cards = ({handleSelect}) => {
  const [cards, setCards] = useState([])
  useEffect(()=> {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])
  return (
    <div className='md:grid md:grid-cols-3 gap-6 md:w-[75%] mb-6
    '>
        {
            cards.map(card => <Card key={card.id} card={card} handleSelect={handleSelect}></Card>)
        }
    </div>
  )
}

Cards.propTypes = {
  handleSelect: PropTypes.func
}

export default Cards