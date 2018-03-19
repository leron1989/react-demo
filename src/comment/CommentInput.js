import React from 'react';
import ReactDOM from 'react-dom';

class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            content:''
        }
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
        if(this.props.onSubmit){
            const {username, content} = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({
            content:''
        })
    }

    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} 
                            onChange={this.handleUserChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
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
