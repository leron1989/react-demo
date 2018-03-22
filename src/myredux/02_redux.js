/**
 * 构建createStore，用来专门生产这种 state 和 dispatch 的集合
 */
export function renderApp (appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle (title) {
  const titleDOM = document.getElementById('title')
  titleDOM.innerHTML = title.text
  titleDOM.style.color = title.color
}

function renderContent (content) {
  const contentDOM = document.getElementById('content')
  contentDOM.innerHTML = content.text
  contentDOM.style.color = content.color
}

// export function createStore (state, stateChanger) {
//   const getState = () => state
//   const dispatch = (action) => stateChanger(state, action)
//   return { getState, dispatch }
// }

/**
 * 上面的代码有一个问题，我们每次通过 dispatch 修改数据的时候，其实只是数据发生了变化，
 * 如果我们不手动调用 renderApp，页面上的内容是不会发生变化的。
 * 但是我们总不能每次 dispatch 的时候都手动调用一下 renderApp，
 * 我们肯定希望数据变化的时候程序能够智能一点地自动重新渲染数据，而不是手动调用。
 * 你说这好办，往 dispatch里面加 renderApp 就好了，但是这样 createStore 就不够通用了。
 * 我们希望用一种通用的方式“监听”数据变化，然后重新渲染页面，这里要用到观察者模式。修改 createStore：
 */
export function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  return { getState, dispatch, subscribe }
}