import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getOneSnax, postReview} from '../state/actions'
import {bindActionCreators} from 'redux'
import Jumbo from '../components/shared/Jumbotron'
import Reviews from '../components/reviews/Reviews'
import AddReview from '../components/reviews/AddReview'
import {Media, Col, Row, Button} from 'reactstrap';
import ReactStars from 'react-stars'

class Snack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addReview: false
    }
  }
  componentDidMount() {
    const snackId = this.props.match.params.id
    this.props.getOneSnax(snackId)
  }

  toggleAdd = () => {
    this.setState({
      addReview: !this.state.addReview
    });
  }

  handleAddReview = (title, text, rating) => {
    this.props.postReview(this.props.singleSnack.id, title, text, rating)
  }

  render() {
    const {
      singleSnack: {
        id,
        name,
        description,
        price,
        img,
        is_perishable,
        reviews
      }
    } = this.props

    const {handleAddReview, toggleAdd} = this

    let averages = 0;
    reviews
      ? averages = reviews.map(ele => ele.rating).reduce((total, rate) => total + parseInt(rate), 0) / reviews.length
      : null

    const jumboStyle = {
      height: {
        height: "20vh"
      },
      title: name
    }

    const edit_link = `/snacks/${id}/edit`

    return (<section>
      <Jumbo props={jumboStyle}/>
      <div id="snack_description">
        <Media>
          <Col>
            <Media object="object" src={img} id="snack_image" alt="food image"/>
          </Col>
          <Row>
            <Media body="body">
              {description}
              <br/>
              <br/>
              ${price}
              <br/>
              <br/>
              <div id="perishable">{
                  is_perishable
                    ? <span>Is Perishable</span>
                    : <span>Is Not Perishable</span>
                }</div>
              <br/>
              <br/>Average Rating:
              <ReactStars count={5} value={averages} edit={false} size={24} color2={'#ffd700'}/>
              <br/>
              <br/>
              <br/>
              <div className="text-right">
                <Link to={edit_link}>
                  <Button size="sm" outline="outline" color="warning">
                    Edit Snack
                  </Button>
                </Link>
              </div>
            </Media>
          </Row>
        </Media>
      </div>
      <hr className="my-2"/>
      <h2 className="text-center">Reviews</h2>
      <div className="text-right">
        <Button onClick={this.toggleAdd} size="sm" outline="outline" color="success">
          Add Review
        </Button>
      </div>

      {
        this.state.addReview
          ? <AddReview {...{toggleAdd, handleAddReview}}/>
          : null
      }

      <hr className="my-2"/> {
        this.props.singleSnack.reviews
          ? <Reviews props={this.props.singleSnack.reviews}/>
          : null
      }
    </section>)
  }
}

const mapStateToProps = ({singleSnack}) => ({singleSnack})
const mapDispatchToProps = dispatch => bindActionCreators({
  getOneSnax,
  postReview
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Snack)
