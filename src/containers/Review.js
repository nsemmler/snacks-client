import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {editReview} from '../state/actions'
import Rate from 'rc-rate'
import {
  Button,
  ButtonGroup,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updateReview: false,
      reviewStars: this.props.review.rating
    }
  }

  toggleUpdate = () => {
    this.setState({
      updateReview: !this.state.updateReview
    })
  }

  updateReview = (snackId, reviewId, title, text, rating) => {
    this.props.editReview(snackId, reviewId, title, text, rating)
  }

  ratingChanged = (newRating) => {
    this.setState({reviewStars: newRating})
  }

  render() {
    const {
      review: {
        title,
        text,
        rating
      }
    } = this.props

    return (<Container id="review-block">
      {
        this.state.updateReview
          ? <Form className="form-horizontal well" onSubmit={event => {
                event.preventDefault();
                this.updateReview(this.props.review.snack_id, this.props.review.id, event.target.title.value, event.target.text.value, this.state.reviewStars);
                this.toggleUpdate();
              }}>
              <div>
                <h4>Edit Review</h4>
              </div>
              <FormGroup>
                <Label for="rating" sm={2}>Rating:
                </Label>
                <Rate count={5} name="rating" id="rating" value={this.state.reviewStars} onChange={this.ratingChanged} half={false} size={24} color2={'#ffd700'} required="required"/>
              </FormGroup>
              <FormGroup row="row">
                <Label for="title" sm={2}>Title</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={title} required="required" name="title" id="title"/>
                </Col>
              </FormGroup>
              <FormGroup row="row">
                <Label for="title" sm={2}>Description</Label>
                <Col sm={9}>
                  <Input type="textarea" defaultValue={text} required="required" name="text" id="text"/>
                </Col>
              </FormGroup>
              <FormGroup check="check" row="row">
                <Col sm={{
                    size: 10,
                    offset: 2
                  }}>
                  <Button outline color="success">Submit</Button>
                </Col>
              </FormGroup>
            </Form>
          : null
      }

      {
        !this.state.updateReview
          ? <div>
              <Row>
                <h4 id="review-title">{title}</h4>
              </Row>
              <Row id="review-block-rate">
                <Rate count={5} value={rating} edit={false} size={24} color2={'#ffd700'}/>
              </Row>
              <Row>{text}</Row>
              <br/>
              <ButtonGroup>
                <Button outline color="warning" size="sm" onClick={this.toggleUpdate}>Edit Review</Button>
              </ButtonGroup>
            </div>
          : null
      }
    </Container>)
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  editReview
}, dispatch)

export default connect(null, mapDispatchToProps)(Review)
