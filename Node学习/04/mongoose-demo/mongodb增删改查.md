## mongoDB增删改查

### 增加数据
```
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
```
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
```
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