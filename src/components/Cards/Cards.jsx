import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Card from './Card'

const Cards = props => {
  const [cards, setCards] = useState([])
  useEffect(()=> {
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setCards(data))
  }, [])
  return (
    <div className='grid grid-cols-3 gap-6'>
        {
            cards.map(card => <Card key={card.id} card={card}></Card>)
        }
    </div>
  )
}

Cards.propTypes = {}

export default Cards