import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                    <button
                        onClick={this.handleBtnClick.bind(this)}
                    >提交</button>
                </div>
                <ul>{this.getTodoItem()}</ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={index}>
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete.bind(this)}
                    />
                    {
                        //key值要写在循环的最外层上
                        // <li 
                        //     key={index} 
                        //     onClick={this.handleItemDelete.bind(this,index)}
                        // >{item}</li>
                    }
                </div>
            )
        })
    }

    handleInputChange(e) {
        // this.setState({
        //     inputValue: e.target.value
        // })
        //使用es6语法进行代码优化，箭头函数返回对象的话不用return，直接用一个括号包起来
        //需要把e.target.value赋值给value，否则会报错
        const value = e.target.value;
        this.setState(()=>({
            inputValue: value
        }))
    }

    handleBtnClick() {
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
        this.setState((prevState)=>({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleItemDelete(index) {
        // immutable state不允许我们做任何的改变，不要直接去修改state里面的内容，对React性能优化有问题
        // console.log(index)
        // const newList = [...this.state.list];
        // newList.splice(index,1);
        // this.setState({
        //     list: newList
        // })
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
};

export default TodoList;