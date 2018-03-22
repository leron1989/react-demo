import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './myReactRedux/Header'
import Content from './myReactRedux/Content'
import './index.css'
import { Provider } from './myReactRedux/my-react-redux'

function createStore(reducer){
  let state = null;
  let listeners = [];
  const getState = () => state;
  const subscribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  dispatch({});
  return {  getState, dispatch, subscribe };
}

function themeReducer(state, action){
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer);

class Index extends Component {
  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}



ReactDOM.render(
  <Provider store={store}>
     <Index />
  </Provider>,
  document.getElementById('root')
)