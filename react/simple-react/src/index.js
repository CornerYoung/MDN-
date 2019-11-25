import React,{Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
    render() {
        return (
            React.createElement(
                'div',
                {
                    className: 'app',
                    id: 'app'
                },
                React.createElement(
                    'h1',
                    {
                        className: 'title'
                    },
                    'Hello World!!'
                ),
                React.createElement(
                    'p',
                    null,
                    'React is good!'
                )
            )
        )
    }
}

render(<App />, document.querySelector('#root'))






//使用类的方式创建一个组件，但这个组件使用的是JSX语法，不是合法的js语法
//所以React在真正运行时会把JSX语法的代码编译成使用React.createElement方法的样子来运行，这样是合法的js语法



