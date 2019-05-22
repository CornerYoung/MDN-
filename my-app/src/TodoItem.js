import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }  
  
  shouldComponentUpdate(nextProps, nextState) {
      if(nextProps.content !== this.props.content){
          return true;
      }else{
          return false;
      }
  }
  

  render() {
    const { content, test } = this.props;
    //JSX --> createElement --> 虚拟DOM（JS对象） --> 真实的DOM
    //return React.createElement('div',{},React.createElement（'span',{},item）);
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
  }

  componentWillUnmount() {
      console.log('child componentWillUnmount 当组件被移除时执行')
  }

  handleClick() {
      const { deleteItem, index } = this.props;
      deleteItem(index);
  }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    //content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello'
}

export default TodoItem;
