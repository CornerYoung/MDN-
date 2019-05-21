import React, { Component } from 'react'

class Test extends Component {
  //当父组件的 render 函数被运行时，它的子组件的 render 都将被重新运行
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

export default Test;
