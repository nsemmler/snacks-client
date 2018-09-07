import React from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import Rate from 'rc-rate'

class AddReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewRate: 0
    }
  }

  ratingChanged = (newRating) => {
    this.setState({reviewRate: newRating})
  }

  render() {
    return (
      <Container>
        <Form className="form-horizontal well" onSubmit={event => {
            event.preventDefault()
            this.props.handleAddReview(event.target.title.value, event.target.text.value, this.state.reviewRate)
            this.props.toggleAdd()
          }}>
          <div>
            <h4>Add Review</h4>
          </div>
          <FormGroup>
            <Label for="rating" sm={2}>
              Rating:</Label>
            <Rate count={5} value={this.state.reviewRate} onChange={this.ratingChanged} half={false} size={24} color2={'#ffd700'} required="required"/>
          </FormGroup>

          <FormGroup row>
            <Label for="title" sm={2}>Title</Label>
            <Col sm={9}>
              <Input type="textarea" required="required" name="title" id="title"/>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>Description</Label>
            <Col sm={9}>
              <Input type="textarea" required="required" name="text" id="text"/>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{
                size: 10,
                offset: 2
              }}>
              <Button outline color="success">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default AddReview;
