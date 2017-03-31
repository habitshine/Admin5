# dateTime(日期选择器)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/date.jpg?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|type| 必须为"dateTime"  |
|plusOptions| 第三发插件本身参数, 参照文档: https://chmln.github.io/flatpickr/options/ |
|value| 默认值 |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|title   | 标题文字  |

### 数据示例
``` json
{
    "type": "dateTime",
    "plusOptions": {
        "dateFormat": "Y-m-d H:i:S",
        "enableTime": true,
        "time_24hr": true
    },
	"value": "2017-07-18 12:00:00",
	"name": "timeValue",
    "column": [6, 4, 3, 3],
    "placeholder": "请选择",
    "title": "日期选择器"
}
```
