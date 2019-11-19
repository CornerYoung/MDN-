import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


//let App = <div><h1>welcome!react</h1><h2>hello!world!!</h2></div>;
//react rend方法探索，第一个参数传一个element，这个element可以赋值给一个变量，当作render的第一个参数（注意element不是字符串，如果有多个，需要使用div包裹起来）
class App{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    say(){
        return this.name+':'+this.age;
    };
    render(){
        return (
            <div><h1>welcome!react</h1><h2>hello!world!!</h2></div>
        );
    };
};
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render( <h1>welcome!react</h1> , document.getElementById('root'));
//ReactDOM.render(App, document.getElementById('root'));

console.log(new App().render());
ReactDOM.render(new App().render(), document.getElementById('root'));




























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
