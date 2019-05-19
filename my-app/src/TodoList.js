import React, { Component, Fragment } from 'react';

class TodoList extends Component {
    render() {
        return (
            <Fragment>
                <div><input /><button>提交</button></div>
                <ul>
                    <li>Learning React</li>
                    <li>Learning JSX</li>
                    <li>Demo</li>
                </ul>
            </Fragment>
        )
    }
};

export default TodoList;