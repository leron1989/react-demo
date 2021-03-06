import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            username:this.props.username,
            content:'',
            createdTime:''
        }
    }

    componentDidMount(){
        this.textarea.focus();
    }

    handleUserChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handleContentChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit(){
        const {username, content} = this.state
        this.props.onSubmit({
            username, 
            content,
            createdTime: +new Date()
        })
        this.setState({
            content:''
        })
    }

    handleUserNameSave(e){
        this.props.onUserNameInputBlur(e.target.value)
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} 
                            onBlur={this.handleUserNameSave.bind(this)}
                            onChange={this.handleUserChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }

}

export default CommentInput;
