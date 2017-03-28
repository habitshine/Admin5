# listView(列表页面初始化数据)   


![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/listView.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|message| 文字提示[选填]  |
|status   | 1: 成功, 0: 失败  |
|data   | 渲染页面的数据  |
|data.form   | 筛选条件数据, 内容为任何组件数据  |
|data.btnGroup   | 表格上方按钮, 该字段为数组格式, 里面都是按钮(用对象表示)  |
|data.btnGroup[].type   | 按钮类型[route/link/ajax] |
|data.btnGroup[].icon    | 对应fontAsome图标名,如'plus'代表加号   |
|data.btnGroup[].text    | 按钮文字  |
|data.btnGroup[].route   | 对应route类型的路由地址  |
|data.btnGroup[].link   | 对应link类型的跳转地址  |
|data.btnGroup[].ajax   | 对应route类型的路由地址  |
|data.table   | 表格数据  |
|data.table.header   | 表格标题  |
|data.table.url   | 相关接口, 根据业务可自行填充, 填充后沟通前端去实现, 默认有3个已经实现(list/edit/del)  |
|data.table.url.list   | 列表数据接口地址  |
|data.table.url.edit   | 编辑数据接口地址  |
|data.table.url.del   | 删除数据接口地址  |


### 数据示例
``` json
{
    "message": "无数据",
    "status": 1,
    "data": {
        "form": [{
            "name": "selectValue",
            "title": "单选",
            "column": [6, 4, 3, 3],
            "type": "select",
            "value": 3,
            "placeholder": "请选择",
            "children": [{
                "value": 1,
                "label": "欧美",
                "disable": false
            }, {
                "value": 2,
                "label": "日韩超级家具",
                "disable": true
            }, {
                "value": 3,
                "label": "地中海",
                "disable": false
            }, {
                "value": 4,
                "label": "紫龙冰河形式",
                "disable": false
            }, {
                "value": 5,
                "label": "弗雷",
                "disable": true
            }, {
                "value": 6,
                "label": "沙漠",
                "disable": false
            }, {
                "value": 7,
                "label": "违和",
                "disable": false
            }, {
                "value": 8,
                "label": "郭德纲",
                "disable": true
            }, {
                "value": 9,
                "label": "于谦",
                "disable": false
            }, {
                "value": 10,
                "label": "三国",
                "disable": false
            }, {
                "value": 11,
                "label": "诸葛亮",
                "disable": true
            }, {
                "value": 12,
                "label": "三可欧",
                "disable": false
            }]
        }, {
            "title": "单选组",
            "name": "radioGroupValue",
            "type": "radioGroup",
            "value": 11,
            "column": [6, 4, 3, 3],
            "children": [{
                "label": "苹果",
                "value": 11,
                "disabled": false
            }, {
                "label": "橘子",
                "value": 22,
                "disabled": false
            }, {
                "label": "梨",
                "value": 33,
                "disabled": false
            }]
        }],
        "btnGroup": [
            {"type": "route", "icon": "plus", "text": "新增", "route": "/home/category/addgoods/add"},
            {"type": "route", "icon": "leaf", "text": "自定义路由", "route": "/home"},
            {"type": "link", "icon": "leaf", "text": "百度", "link": "http://baidu.com"},
            {"type": "ajax", "icon": "leaf", "text": "ajax请求", "data": {"a": 1, "b": 2}}
        ],
        "table": {
            "url": {
                "list": "./mock/table",
                "edit": "./mock/success",
                "del": "./mock/success"
            },
            "btnGroup": [
                {"text": "编辑", "path": "/home/x/edit"},
                {"text": "禁用", "path": "/home/x/disable"}
            ],
            "header": [
                { "text": "id" },
                { "text": "标题" },
                { "text": "时间", "icon": "clock-o" },
                { "text": "分类" },
                { "text": "操作" }
            ]
        }
    }
}
```
