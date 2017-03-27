# checkboxGroupValue(复选框组)   


![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/checkboxGroupValue.jpg?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|type| 必须"checkboxGroup"  |
|value| 默认值  |
|children   | 复选框, 内容对应单个复选框  |
|children.label   | 当前复选框对应的名字  |
|children.value   | 选项值, 最终会传递到服务端的相关数据  |
|children.disabled   | 当前复选框是否禁用，true为禁用|

### 数据示例
``` json
{
    "title": "复选框组",
    "name": "checkboxGroupValue",
    "column": [12, 12, 12, 12],
    "type": "checkboxGroup",
    "value": "11",
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
