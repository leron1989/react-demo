import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component{
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDelComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      timeString: ''
    }
  }

  componentWillMount(){
    this._updateTimeString();
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    //解决Can only update a mounted or mounting component 问题
    //http://www.cnblogs.com/jlj9520/p/7371955.html
    this.setState = (state,callback)=>{
      return;
    };  
  }

  _updateTimeString(){
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  handleDelComment(e){
    this.props.onDelComment(this.props.index)
  }

  render () {
      return (
        <div className='comment'>
          <div className='comment-user'>
            <span>{this.props.comment.username} </span>：
          </div>
          <p>{this.props.comment.content}</p>
          <span className='comment-createdtime'>
            {this.state.timeString}
          </span>
          <span className='comment-delete' onClick={this.handleDelComment.bind(this)}>
            删除
          </span>
        </div>
        // <div className='comment'>
        //   <div className='comment-user'>
        //     <span className='comment-username'>
        //       {comment.username}
        //     </span>：
        //   </div>
        //   <p dangerouslySetInnerHTML={{
        //     __html: this._getProcessedContent(comment.content)
        //   }} />
        //   <span className='comment-createdtime'>
        //     {this.state.timeString}
        //   </span>
        //   <span
        //     onClick={this.handleDeleteComment.bind(this)}
        //     className='comment-delete'>
        //     删除
        //   </span>
        // </div>
      )
  }
}

export default Comment