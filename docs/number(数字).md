# number(数字)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/number.png?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题|
|value| 默认值  |
|min| 最小值  |
|max| 最大值  |
|name   | ajax字段名, 服务端接收参数名  |
|is| 必须"number"  |
|placeholder| 提示文字  |
|column   | 对应bootstrap的栅格布局  |

### 数据示例
``` json
{
    "title": "数字选择器",
    "value": 5,
    "min":3,
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
}
```
