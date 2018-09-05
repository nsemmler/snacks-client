import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editSnack, getOneSnax} from '../state/actions'
import {bindActionCreators} from 'redux'
import SnackForm from '../components/snacks/SnackForm'
import Jumbo from '../components/shared/Jumbotron'

class EditSnack extends Component {

  componentDidMount() {
    const snackId = this.props.match.params.id
    this.props.getOneSnax(snackId)
  }

  handleEditSnack = (snackId, title, description, price, img, is_perishable) => {
    this.props.editSnack(snackId, title, description, price, img, is_perishable)
    this.props.history.push(`/snack/${snackId}`)
  }

  render() {

    const jumboStyle = {
      height: {
        height: "30vh"
      },
      title: 'Edit Snack',
      subtitle: ''
    }

    return (<section>
      <Jumbo props={jumboStyle}/>
      <div id="form">
        <SnackForm singleSnack={this.props.singleSnack} handleEditSnack={this.handleEditSnack}/>
      </div>
    </section>)
  }
}

const mapStateToProps = ({singleSnack}) => ({singleSnack})
const mapDispatchToProps = dispatch => bindActionCreators({
  editSnack,
  getOneSnax
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EditSnack)
