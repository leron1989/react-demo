import React from 'react';

export default (WrappedComponent, name) => {
  class LocalStorageActions extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data:null
      }
    }
    
    componentWillMount(){
      let data = localStorage.getItem(name)
      try {
        // 尝试把它解析成 JSON 对象
        this.setState({ data: JSON.parse(data) })
      } catch (e) {
        // 如果出错了就当普通字符串读取
        this.setState({ data })
      }
    }

    saveData(data){
      try {
        // 尝试把它解析成 JSON 字符串
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        // 如果出错了就当普通字符串保存
        localStorage.setItem(name, `${data}`)
      }
    }

    render(){
      return (
        <WrappedComponent data={this.state.data} 
          saveData={this.saveData.bind(this)}
          {...this.props} />
      )
    }
  }
  return LocalStorageActions;
}