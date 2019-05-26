## React Demo

- 把项目 clone 到本地
```javascript
git clone git@github.com:CornerYoung/MDN-.git
```

- 进入到项目文件夹下安装相关依赖
```javascript
npm install
```

- 启动项目
```javascript
npm start
```

### 无状态组件
当定义一个 UI 组件的时候，它只负责页面渲染的时候，没有去做任何的逻辑操作的时候，这个时候 UI 组件一般都可以通过无状态组件来定义。因为无状态组件只是一个函数，并不继承 Component 类，避免了生命周期函数的运行，能够提高性能。（当然这也不是绝对的）

### Redux设计原则
- store 必须是唯一的。
- 只有 store 能够改变自己的内容（这也是 reducer 一定不要改变 state 里面内容的原因）。
- Reducer 必须是纯函数，指的是给定固定的输入，就一定会有固定的输出，而且不会有任何副作用。

#### Redux核心API
```javascript
createStore   store.dispatch   store.getState   
store.subscribe 
``` 