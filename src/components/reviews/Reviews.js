import React from 'react'
import {Container} from 'reactstrap';
import Review from '../../containers/Review'

const Reviews = ({props}) => {

  return (<Container id="reviews">
    {props.map(review => <Review key={review.id} review={review}/>)}
  </Container>)
}

export default Reviews
