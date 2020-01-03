import React,{Component} from 'react'
import {render} from 'react-dom'

// class App extends Component {
//     render() {
//         console.log(this)
//         return (
//             <div className="app">
//                 <h1>hello world!</h1>
//                 <p>{this.props.name}</p>
//             </div>
//         )
//     }
// } 

class App extends Component {
    render() {
        return (
            React.createElement(
                'div',
                {
                    className:'app'
                },
                React.createElement(
                    'h1',
                    null,
                    'hello world'
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.name
                )
            )
        )
    }
}

render(
    <App name="React"/>
    , document.querySelector('#root'))



