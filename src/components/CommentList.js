import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types';

class CommentList extends React.Component{
	static proptypes = {
		comments:PropTypes.array.isRequired,
		onDelComment: PropTypes.func.isRequired
	}

	handleCommentDel(index){
		this.props.onDelComment(index);
	}

	render() {
			const comments = this.props.comments
			return (
				<div>
						{comments.map(
								(comment, i) => (
										<Comment onDelComment={this.handleCommentDel.bind(this)} index={i} comment={comment} key={comment.createdTime || i} />
								)
						)}
				</div>
			)
			
	}
}

export default CommentList;