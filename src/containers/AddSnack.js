import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addSnack} from '../state/actions'
import {bindActionCreators} from 'redux'
import SnackForm from '../components/snacks/SnackForm'
import Jumbo from '../components/shared/Jumbotron'

class AddSnack extends Component {
  handleAddSnack = (title, description, price, img, is_perishable) => {
    this.props.addSnack(title, description, price, img, is_perishable)
    this.props.history.push('/snacks')
  }

  render() {
    const jumboStyle = {
      height: {
        height: "30vh"
      },
      title: 'Add Snack',
      subtitle: `Can't wait to see what you come up with..`
    }

    return (<section>
      <Jumbo props={jumboStyle}/>
      <div id="form">
        <SnackForm handleAddSnack={this.handleAddSnack}/>
      </div>
    </section>)
  }
}

const mapStateToProps = ({singleSnack}) => ({singleSnack})
const mapDispatchToProps = dispatch => bindActionCreators({
  addSnack
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddSnack)
