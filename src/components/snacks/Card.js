import React from 'react'
import {Link} from 'react-router-dom'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class SingleCard extends React.Component {

  render() {
    const {
      card: {
        id,
        name,
        description,
        price,
        img
      }
    } = this.props
    const link = `/snack/${id}`
    return (<Card sm="6" className="col-lg-4 col-md-2 col-sm-2">
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>${price}</CardSubtitle>
      </CardBody>
      <CardImg id="card_img" width="100%" src={img} alt="Card image cap"/>
      <CardBody>
        <CardText>{description}</CardText>
        <Link to={link}>
          <Button size="lg" block="block">
            More Info
          </Button>
        </Link>
      </CardBody>
    </Card>)
  }
}

export default SingleCard
