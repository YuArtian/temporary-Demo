import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addAction } from '../actions/index.js'

class Root extends Component {
  render(){
    let { value, onClickAdd } = this.props
    return (
      <div>
        <span>{ value }</span>
        <button onClick={ onClickAdd }>Add</button>
      </div>
    )
  }
}

function mapStateToProps (state,props) {
  return {
    value: state.count
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onClickAdd: () => dispatch(addAction)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)