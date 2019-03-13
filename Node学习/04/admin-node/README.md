# Express - crud

## 起步

- 初始化
- 模板处理

## 路由设计

| 请求方法   |     请求路径      | get 参数  |           post 参数            |       备注       |
|----------|------------------|----------|--------------------------------|------------------|
| GET      | /players         |          |                                | 渲染首页         |
| GET      | /players/new     |          |                                | 渲染添加球员页面 |
| POST     | /players/new     |          | name、team、level、gener        | 处理添加球员请求 |
| GET      | /players/edit    | id       |                                | 渲染编辑页面     |
| POST     | /players/edit    |          | id、name、team、level、gener     | 处理编辑请求     |
| GET      | /players/delete  | id       |                                | 处理删除请求     |
|          |                  |          |                                |                  |
