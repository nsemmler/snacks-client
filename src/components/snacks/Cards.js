import React from 'react'
import {CardGroup} from 'reactstrap';
import Card from './Card'

const Cards = ({props}) => {
  return (
    <CardGroup>
      <div className="d-flex align-content-around flex-wrap">
        {
          props.map(card => {
            return (<Card key={card.id} card={card}/>)
          })
        }
      </div>
    </CardGroup>
  )
}

export default Cards
