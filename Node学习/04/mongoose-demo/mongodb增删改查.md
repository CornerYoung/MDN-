## mongoDB增删改查

### 增加数据
```javascript
var admin = new User({
    username:'lisi',
    password:'123456890',
    email:'lisi@admin.com'
});

//数据持久化
admin.save(function(err,ret){
    if(err){
        console.log('保存失败！');
    }else{
        console.log('保存成功');
        console.log('ret: '+ret);
    }
});
```

### 查询数据 
```javascript
User.find(function(err,ret){
    if(err){
        console.log('查询失败！');
    }else{
        console.log('查询成功！');
        console.log(ret);
    }
});

User.findOne({
    username:'lisi'
},function (err, ret) {
    if (err) {
        console.log('查询失败！');
    } else {
        console.log('查询成功！');
        console.log(ret);
    }
});
```

### 删除数据 
```javascript
User.remove({
    username : 'zs'
},function(err,ret){
    if(err){
        console.log(err);
    }else{
        console.log(ret);
    }
});
```

### 更新数据 

```javascript
User.remove({
    username : 'zs'
},function(err,ret){
    if(err){
        console.log(err);
    }else{
        console.log(ret);
    }
});
```

- > *使用 mongoose 这个包，不用像 Mysql 下载很多软件，这里设计一下，那里改一下，这里一切都是JS代码，几乎感知不到是在操作数据库。这是因为 mongoDB 和 Node.js 结合的非常好，当然， mongoDb 也可以操作 Mysql。*