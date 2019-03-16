### 路由设计
|   路径   | 方法 | get参数|          post参数       | 是否需要登陆|     备注     |
|---------|-----|--------|------------------------ |----------|--------------|
|    /    | GET |        |                         |          |    渲染首页   |
|/register| GET |        |                         |          |  渲染注册页面  |
|/register| POST|        | email、nickname、password|          |  处理注册请求  |
|/login   | GET |        |                         |           |  渲染登录页面 |
|/login   | POST|        |      email、password     |          |   处理登陆请求 |
|/logout  | GET |        |                         |           |  处理退出请求  |