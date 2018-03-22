// import {} from './myredux/02_redux'
// import { renderApp, createStore } from './myredux/02_redux'
// import { renderApp, createStore } from './myredux/03_redux'
import { renderApp, createStore } from './myredux/04_redux'

// const appState = {
//   title: {
//     text: 'React.js 小书',
//     color: 'red',
//   },
//   content: {
//     text: 'React.js 小书内容',
//     color: 'blue'
//   }
// }



// renderApp(appState);
// setTimeout(() => {
//   dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
//   dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//   renderApp(appState);
// }, 2000);



///////////////////////////////////////////////////////////////////////////////////////////////////////


// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       state.title.text = action.text
//       break
//     case 'UPDATE_TITLE_COLOR':
//       state.title.color = action.color
//       break
//     default:
//       break
//   }
// }

// function stateChanger (state, action) {
//   switch (action.type) {
//     case 'UPDATE_TITLE_TEXT':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           text: action.text
//         }
//       }
//     case 'UPDATE_TITLE_COLOR':
//       return { // 构建新的对象并且返回
//         ...state,
//         title: {
//           ...state.title,
//           color: action.color
//         }
//       }
//     default:
//       return state // 没有修改，返回原来的对象
//   }
// }

// const store = createStore(appState, stateChanger)

/**
 * 1
 */
// renderApp(store.getState()) // 首次渲染页面
// setTimeout(() => {
//   store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
//   store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
//   renderApp(store.getState()) // 把新的数据渲染到页面上
// }, 2000);

/**
 * 2
 */
// store.subscribe(() => renderApp(store.getState()))
// renderApp(store.getState()) // 首次渲染页面
// setTimeout(() => {
//   store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
//   store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// // ...后面不管如何 store.dispatch，都不需要重新调用 renderApp
// }, 2000);

/**
 * 3
 */
// let oldState = store.getState() // 缓存旧的 state
// console.log("1", oldState)
// store.subscribe(() => {
//   const newState = store.getState() // 数据可能变化，获取新的 state
//   console.log("2", newState)
//   renderApp(newState, oldState) // 把新旧的 state 传进去渲染
//   oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
// })

// renderApp(store.getState()) // 首次渲染页面
// setTimeout(() => {
//   store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
//   store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色
// }, 2000);

/**
 * 4
 */
function stateChanger (state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js 小书',
        color: 'red',
      },
      content: {
        text: 'React.js 小书内容',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
    default:
      return state
  }
}