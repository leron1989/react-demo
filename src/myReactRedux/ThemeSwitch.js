import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from './my-react-redux'

class ThemeSwitch extends Component {
  // static contextTypes = {
  //   store: PropTypes.object
  // }

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     themeColor: ''
  //   }
  // }

  // componentWillMount(){
  //   const {store} = this.context
  //   this._updateThemeColor();
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor(){
  //   const { store } = this.context;
  //   const state = store.getState();
  //   this.setState({
  //     themeColor: state.themeColor
  //   })
  // }

  handleSwitchColor(color){
    // const { store } = this.context;
    // store.dispatch({
    //   type: 'CHANGE_COLOR',
    //   themeColor: color
    // })
    if(this.props.onSwitchColor){
      this.props.onSwitchColor(color);
    }
  }

  render () {
    return (
      <div>
        {/* <button style={{color: this.state.themeColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button style={{color: this.state.themeColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button> */}
        <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button style={{color: this.props.themeColor}} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}

const mapStateProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({
        type: "CHANGE_COLOR",
        themeColor: color
      })
    }
  }
}

export default connect(mapStateProps, mapDispatchProps)(ThemeSwitch)