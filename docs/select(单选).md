# select(单选)   


![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/select.png?raw=true)

## 不分组

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|is| 必须"select"  |
|name   | ajax字段名, 服务端接收参数名  |
|value   | 默认值, 对应children中的value, 如果没有默认值, 那么为null  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|children   | 列表数据, 内容对应联动的列表  |
|children.label   | 当前级显示名  |
|children.value   | 选项值, 最终会传递到服务端的相关数据  |
|children.label   | 选线显示文字|

### 数据示例
``` json
{
    "title": "单选",
    "is": "select",
    "name": "selectValue",
    "value": "3",
    "column": [6, 4, 3, 3],
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
}
```


## 分组

![](https://github.com/383514580/Store/blob/master/admin3/doc/images/selectGroup.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|type| 必须"select"  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|children   | 列表数据, 内容对应联动的列表  |
|children.title   | 组标题  |
|children.children   | 当前组选项数据  |
|children.children.label   | 选项显示名  |
|children.children.value   | 选项值, 最终会传递到服务端的相关数据  |


### 数据示例
```json
{
    "name": "selectGroupValue",
    "title": "多选",
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
}
```
