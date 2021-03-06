# add/editView(添加/修改页面初始化数据)   


![](https://github.com/383514580/Store/blob/master/admin5/docs/images/form.png?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|message| 文字提示[选填]  |
|status   | 1: 成功, 0: 失败  |
|data   | 渲染页面的数据  |
|data.form   | 表单数据, 内容为任何组件数据  |


### 数据示例
``` json

{
    "message": "无数据",
    "status": 1,
    "data": {
        "form": [{
            "title": "输入框",
            "value": "工具",
            "name": "inputValue",
            "type": "input",
            "placeholder": "输入吧少年",
            "column": [6, 4, 3, 3],
            "tip": "必选哦!"
        }, {
            "title": "复选框组",
            "value": [33],
            "name": "checkboxGroupValue",
            "column": [12, 12, 12, 12],
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
            "value": 3,
            "column": [6, 4, 3, 3],
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
            "column": [6, 4, 3, 3],
            "value": [1, 3, 7],
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
            "value": "2017-01-01 12:13:14",
            "name": "timeValue",
            "column": [6, 4, 3, 3],
            "type": "dateTime",
            "placeholder": "请选择"
        }, {
            "name": "selectMulitValue",
            "title": "多选列表",
            "column": [6, 4, 3, 3],
            "type": "selectMulit",
            "value": [1, 3, 4],
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
            "value": 22,
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
        }, {
            "name": "linkageValue",
            "value": { "values": [1, 1, 1, 1], "texts": ["欧美", "水果", "热带", "玻璃"] },
            "title": "联动",
            "column": [12, 12, 12, 12],
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

        }],
        "url": {
            "submit": "./mock/success"
        }
    }
}
```
