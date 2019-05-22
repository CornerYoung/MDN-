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