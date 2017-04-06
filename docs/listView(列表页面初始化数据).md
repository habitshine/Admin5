# listView(列表页面初始化数据)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/listView.png?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|message| 文字提示[选填]  |
|status   | 1: 成功, 0: 失败  |
|data   | 渲染页面的数据  |
|data.breadcrumb   | 面包屑  |
|data.formHiddenValue   | 可以理解为隐藏域 |
|data.form[]   | 筛选条件数据, 内容为任何组件数据  |
|data.table   | 表格数据  |
|data.table.primaryKey   | 主键名,比如'uid'  |
|data.table.url   | 列表数据接口地址  |
|data.table.header   | 表格标题栏  |
|data.table.header[].text   | 表格标题  |
|data.table.header[].key   | 数据库中该字段对应的键名  |
|data.table.header[].icon  | 表头图标  |
|data.table.btnGroupInRow   | 行内的按钮  |
|data.table.btnGroupInRow[].text   | 按钮文字  |
|data.table.btnGroupInRow[].icon   | 对应fontAsome图标名  |
|data.table.btnGroupInRow[].url   | ajax请求地址/路由地址  |
|data.table.btnGroupInRow[].type   | 按钮类型, 分为删除功能: 'remove';跳转路由功能: 'route'  |
|data.table.btnGroupInRow[].url    | 当type为'route'时, 对应页面的初始化数据的ajax请求地址  |
|data.table.btnGroupInRow[].path    | 路由地址  |
|data.table.btnGroupInRow[].template    | 页面对应的模板'add/list/edit'等  |
|data.table.btnGroupForTable   | 用来操作表格所选数据的按钮 |
|data.table.btnGroupForTable[].url    | ajax请求地址  |
|data.table.btnGroupForTable[].icon    | 对应fontAsome图标名,如'plus'代表加号   |
|data.table.btnGroupForTable[].text    | 按钮文字  |
|data.table.btnGroupForTable[].type   | 按钮类型, 分为ajax功能: 'ajax';跳转路由功能: 'route'  |
|data.table.btnGroupForTable[].url    | 当type为'route'时, 对应页面的初始化数据的ajax请求地址  |
|data.table.btnGroupForTable[].path    | 路由地址  |

### 数据示例
``` json
{
    "message": "无数据",
    "status": 1,
    "data": {
        "breadcrumb": [{ "icon": "file-o", "text": "世界" }, { "icon": "file-o", "text": "中国" }, { "icon": "file-o", "text": "农村" }],
        "formHiddenValue": { "a": 1, "b": [2, 3, 4] },
        "form": [{
            "title": "时间选择器",
            "value": "08:20",
            "name": "timePickValue",
            "is": "time",
            "placeholder": "请输入数字",
            "column": [
                12,
                12,
                2,
                2
            ]
        }, {
            "title": "数字选择器",
            "value": 5,
            "min": 3,
            "max": 12,
            "name": "numberValue",
            "is": "number",
            "placeholder": "请输入数字",
            "column": [
                12,
                12,
                2,
                2
            ]
        }, {
            "validate": { "require": true },
            "title": "输入框",
            "value": "123",
            "name": "inputValue",
            "is": "input",
            "placeholder": "输入吧少年",
            "column": [
                12,
                12,
                3,
                3
            ],
            "tip": "必选哦!"
        }, {
            "title": "复选框组",
            "value": null,
            "name": "checkboxGroupValue",
            "column": [
                12,
                12,
                6,
                6
            ],
            "is": "checkboxGroup",
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
        }, {
            "name": "selectGroupValue",
            "title": "单选支持组",
            "value": null,
            "column": [
                12,
                4,
                3,
                3
            ],
            "is": "select",
            "placeholder": "请选择",
            "children": [{
                "title": "A组",
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
                }]
            }, {
                "title": "B组",
                "children": [{
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
            }]
        }, {
            "title": "多选支持组",
            "name": "selectMulitGroupValue",
            "column": [
                12,
                4,
                3,
                3
            ],
            "value": null,
            "is": "selectMulit",
            "placeholder": "请选择",
            "children": [{
                "title": "A组",
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
                }]
            }, {
                "title": "B组",
                "children": [{
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
            }]
        }, {
            "title": "日期选择器",
            "value": null,
            "name": "timeValue",
            "column": [
                12,
                4,
                3,
                3
            ],
            "is": "dateTime",
            "thirdPartyOptions": {
                "dateFormat": "Y-m-d H:i:S",
                "enableTime": true,
                "time_24hr": true
            },
            "placeholder": "请选择"
        }, {
            "title": "日期选择器",
            "value": null,
            "name": "timeValue1",
            "column": [
                12,
                4,
                3,
                3
            ],
            "is": "dateTime",
            "thirdPartyOptions": {
                "dateFormat": "Y-m-d H:i:S",
                "enableTime": true,
                "time_24hr": true
            },
            "placeholder": "请选择"
        }, {
            "name": "selectMulitValue",
            "title": "多选列表",
            "column": [
                12,
                4,
                3,
                3
            ],
            "is": "selectMulit",
            "value": null,
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
            "title": "单选框组",
            "name": "radioGroupValue",
            "is": "radioGroup",
            "value": 11,
            "column": [
                12,
                12,
                4,
                4
            ],
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
        }, {
            "name": "linkageValue",
            "value": null,
            "title": "联动",
            "column": [
                12,
                12,
                8,
                8
            ],
            "is": "linkage",
            "placeholder": "请选择",
            "children": [{
                "label": "一级",
                "name": "id1",
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
                }]
            }, {
                "url": "./mock/children?level=2",
                "name": "id2",
                "label": "二级",
                "children": []
            }, {
                "url": "./mock/children?level=3",
                "name": "id3",
                "label": "三级",
                "children": []
            }, {
                "url": "./mock/children?level=4",
                "name": "id4",
                "label": "四级",
                "children": []
            }]
        }, {
            "title": "评分组件",
            "name": "rateStarValue",
            "is": "rateStar",
            "value": 3,
            "column": [
                12,
                4,
                3,
                3
            ]
        }],
        "table": {
            "primaryKey": "uid",
            "url": "./mock/table",
            "btnGroupInRow": [{
                "text": "删除",
                "icon": "remove",
                "url": "./mock/success",
                "type": "remove"
            }, {
                "text": "编辑",
                "icon": "edit",
                "path": "/home/goods/edit",
                "type": "route"
            }, {
                "text": "查看",
                "icon": "eye",
                "path": "/home/readonly",
                "url": "./mock/editView",
                "type": "route"
            }],
            "btnGroupForTable": [{
                "text": "添加数据",
                "icon": "plus",
                "path": "/home/goods/add",
                "type": "route"
            }, {
                "url": "./mock/success?remove",
                "text": "删除所选",
                "icon": "remove",
                "type": "ajax"
            }, {
                "url": "./mock/success?toggle",
                "text": "启用禁用",
                "icon": "toggle-on",
                "type": "ajax"
            }, {
                "url": "./mock/success?reset",
                "text": "设置为休息",
                "icon": "toggle-off",
                "type": "ajax"
            }],
            "header": [{
                "text": "用户id",
                "key": "uid",
                "icon": "user-circle-o"
            }, {
                "text": "标题",
                "key": "title",
                "icon": "car"
            }, {
                "text": "时间",
                "key": "create_time",
                "icon": "clock-o"
            }, {
                "text": "分类",
                "key": "category",
                "icon": "coffee"
            }]
        }
    }
}

```
