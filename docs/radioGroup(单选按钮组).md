# radioGroup(单选按钮组)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/radioGroup.jpg?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|disabled   | 只读, 可选true/false |
|is| 必须"radioGroup"  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|value   | 默认值  |
|children   | 单选按钮组  |
|children.label   | 单选按钮标题  |
|children.value   | 选项值, 最终会传递到服务端的相关数据  |
|children.disabled   | 单选按钮是否禁用  |



### 数据示例
```json
{
    "title": "单选组",
    "disabled": true,
    "is": "radioGroup",
    "name": "radioGroupValue",
    "column": [6, 4, 3, 3],
    "value": 11,
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
}
```

                    
                    