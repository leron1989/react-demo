import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component{
    render() {
        const comments = this.props.comments
        console.log(comments)
        return (
            <div>
                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

export default CommentList;