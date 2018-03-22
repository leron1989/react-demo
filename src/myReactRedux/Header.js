import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './my-react-redux'

class Header extends Component {
  // static contextTypes = {
  //   store: PropTypes.object
  // }

  // constructor(props){
  //   super(props);
  //   this.state = { themeColor: '' }
  // }

  // componentWillMount(){
  //   const {store} = this.context
  //   this._updateThemeColor();
  //   store.subscribe(() => this._updateThemeColor())
  // }

  // _updateThemeColor(){
  //   const { store } = this.context;
  //   const state = store.getState();
  //   this.setState({ themeColor: state.themeColor })
  // }


  render () {
    return (
      // <h1 style={{color: this.state.themeColor}}>React.js 小书</h1>
      <h1 style={{color: this.props.themeColor}}>React.js 小书</h1>
    )
  }
}

const mapStateProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

export default connect(mapStateProps)(Header)