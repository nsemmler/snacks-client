import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getFeaturedSnax} from '../state/actions'
import {Container, Row, Col} from 'reactstrap';
import Cards from '../components/snacks/Cards'
import Jumbo from '../components/shared/Jumbotron'

class Home extends Component {
  componentDidMount() {
    this.props.getFeaturedSnax()
  }

  render() {
    const jumboStyle = {
      height: {
        height: "90vh"
      },
      title: 'Welcome Snackers',
      subtitle: 'We Are The Ultimate Snackers Database'
    }

    return (<Container fluid="fluid">
      <Jumbo props={jumboStyle}/>
      <section id="what" className="container-fluid">
        <Row>
          <h1>Who & What</h1>
        </Row>
        <Row>
          <Col>
            <div className="circle">Community</div>
          </Col>
          <Col>
            <div className="circle">Snacks</div>
          </Col>
          <Col>
            <div className="circle">Reviews</div>
          </Col>
        </Row>
      </section>

      <section id="featured-products" className="container-fluid">
        <h1>Featured Products</h1>
        <Cards props={this.props.featuredSnacks}/>
      </section>
    </Container>)
  }
}

const mapStateToProps = ({featuredSnacks}) => ({featuredSnacks})
const mapDispatchToProps = dispatch => bindActionCreators({
  getFeaturedSnax
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
