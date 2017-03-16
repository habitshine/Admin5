# menu(菜单)   


![](https://github.com/383514580/Store/blob/master/admin5/docs/images/menu.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|id| [选填]  |
|icon   | awsome图标库的图标名, 例如"plus, remove"  |
|text   | 菜单显示文字  |
|children   | 菜单列表  |
|children.id   | 菜单id[选填] |
|children.text   | 菜单显示文字  |
|children.route   | 路由信息  |
|children.route.path   | 模块名, 默认都是home/xxx|
|children.route.query   | 参数, ?后面部分|
|children.route.query.xxx   | 参数值, 列表页有2个参数必填{"page": 1,"limit": 15}|

### 数据示例
``` json
[{
    "id": 1,
    "icon": "plus",
    "text": "系统设置",
    "children": [{
        "id": 11,
        "text": "商品列表",
        "route": {
            "path": "/home/list",
            "query": {
                "page": 1,
                "limit": 15
            }
        }
    }]
}, {
    "id": 2,
    "text": "菜单2",
    "children": [{
        "id": 11,
        "text": "新增",
        "route": {
            "path": "/home/add"
        }
    }, {
        "id": 12,
        "text": "编辑",
        "route": {
            "path": "/home/edit"
        }
    }]
}, {
    "id": 33,
    "text": "登陆",
    "route": {
        "path": "/login"
    }
}]

```
