import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
//import Test from './Test';

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的 state 或者 props 发生改变时，render 函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id="insertArea"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => { this.input = input }}
                    />
                    <button
                        onClick={this.handleBtnClick}
                    >提交</button>
                </div>
                <ul 
                    ref={(ul) => {this.ul = ul}}
                >
                    {this.getTodoItem()}
                </ul>
                {
                    //<Test content={this.state.inputValue}/>
                }
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div key={item}>
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
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
        // const value = e.target.value; 可以使用 ref 替代 e.target 直接操作dom节点，但不推荐这么使用，会出问题
        const value = this.input.value;
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
        }),()=>{
            console.log(this.ul.querySelectorAll('div').length);
        });
        //由于setState是一个异步函数，所以会先打印 this.ul.querySelectorAll('div').length，会造成数据错误
        //console.log(this.ul.querySelectorAll('div').length)
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