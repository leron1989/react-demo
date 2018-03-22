import React from 'react';
import PropTypes from 'prop-types';
import wrapWithLoadData from './wrapWithLoadData';

class CommentInput extends React.Component{
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            username:this.props.data || '',
            content:'',
            createdTime:''
        }
    }

    componentDidMount(){
        this.textarea.focus();
        //改为通过高阶函数实现
        // this.setState({
        //     username: localStorage.getItem("username")
        // })
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

    //改为通过高阶函数实现
    // _saveUserNameToStorage(username){
    //     localStorage.setItem("username", username);
    // }

    handleUserNameSave(e){
        this.props.saveData(e.target.value)
        // this._saveUserNameToStorage(e.target.value);
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

CommentInput = wrapWithLoadData(CommentInput, 'username')
export default CommentInput;
