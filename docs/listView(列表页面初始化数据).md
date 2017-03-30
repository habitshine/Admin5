# listView(列表页面初始化数据)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/listView.png?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|message| 文字提示[选填]  |
|status   | 1: 成功, 0: 失败  |
|data   | 渲染页面的数据  |
|data.form   | 筛选条件数据, 内容为任何组件数据  |
|data.table   | 表格数据  |
|data.table.primaryKey   | 主键名,比如'uid'  |
|data.table.url   | 相关接口, 根据业务可自行填充, 填充后沟通前端去实现, 默认有2个已经实现(list/del)  |
|data.table.url.list   | 列表数据接口地址  |
|data.table.url.del   | 删除数据接口地址  |
|data.table.btnGroupInRow   | 行内的按钮  |
|data.table.btnGroupInRow[].text   | 按钮文字  |
|data.table.btnGroupInRow[].icon   | 对应fontAsome图标名  |
|data.table.btnGroupInRow[].path   | 路由地址  |
|data.table.header   | 表格标题  |
|data.table.btnGroupForSelect   | 底部用来操作表格所选数据的按钮 |
|data.table.btnGroupForSelect[].url    | ajax请求地址  |
|data.table.btnGroupForSelect[].icon    | 对应fontAsome图标名,如'plus'代表加号   |
|data.table.btnGroupForSelect[].text    | 按钮文字  |

### 数据示例
``` json
{
    "message": "无数据",
    "status": 1,
    "data": {
        "form": [{
            "title": "输入框",
            "value": "",
            "name": "inputValue",
            "type": "input",
            "placeholder": "输入吧少年",
            "column": [
                12,
                4,
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
            "type": "checkboxGroup",
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
            "type": "select",
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
            "type": "selectMulit",
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
            "type": "dateTime",
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
            "type": "selectMulit",
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
            "type": "radioGroup",
            "value": 11,
            "column": [
                12,
                4,
                3,
                3
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
            "type": "linkage",
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
            "type": "rateStar",
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
            "url": {
                "list": "./mock/table",
                "del": "./mock/success"
            },
            "btnGroupInRow": [{ "text": "新增", "icon": "edit", "path": "/home/x/add" }, { "text": "查看", "icon": "eye", "path": "/home/readonly" }],
            "btnGroupForSelect": [{
                "url": "./mock/success?remove",
                "text": "删除所选",
                "icon": "remove"
            }, {
                "url": "./mock/success?toggle",
                "text": "启用禁用",
                "icon": "toggle-on"
            }, {
                "url": "./mock/success?reset",
                "text": "设置为休息",
                "icon": "toggle-off"
            }],
            "header": [{
                "text": "用户id",
                "key": "uid",
                "icon": "user"
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
