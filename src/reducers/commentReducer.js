/**
 * 1.先定义action类型
 *  1.1 每个action类型对应一种状态，如：INIT_COMMENTS对应的状态应该是LocalStorage里面的评论列表，
 *      ADD_COMMENT对应的状态应该是被添加的评论，DELETE_COMMENT对应的应该是被删除评论的index
 * 2.构建reducer:
 *  2.1 只有总的rootReducer暴露
 *  2.2 总的rootReducer可以根据需要分成多个reducers
 *  2.3 总的rootReducer返回的state应该是应用完整的state
 * 3. 构建action creaters
 * 4. 划分Smart和Dump组件
 *  4.1 Dump组件纯组件，可服用
 *  4.2 Smart组件负责逻辑控制
 *    4.2.1 构建Smart组件时需确认有哪些操作（属性），如CommentListContainer有：comments,initComments,deleteComment
 */

// action types
const INIT_COMMENTS = 'INIT_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const DELETE_COMMENT = 'DELETE_COMMENT'

export const initComments = (comments) => {
  return {
    type: INIT_COMMENTS,
    comments
  }
}

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

export const deleteComment = (commentIndex) => {
  return {
    type: DELETE_COMMENT,
    commentIndex
  }
}

export default function(state = {comments:[]}, action){
  switch(action.type){
    case INIT_COMMENTS:
      return {comments: action.comments}
    case ADD_COMMENT:
      return {comments: [...state.comments, action.comment]}
    case DELETE_COMMENT:
      return {comments: [
        ...state.comments.slice(0, action.commentIndex),
        ...state.comments.slice(action.commentIndex + 1)
      ]}
    default:
      return state;
  }
}