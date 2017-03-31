# input(输入框)   


![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/input.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|is| 必须"input"  |
|type| 对应html中input的type属性的值, 比如'password'/ 'input'  |
|value| 默认值  |
|icon| 图标  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|tip   | 文本框对应的提示信息  |

### 数据示例
``` json
{
	"is": "input",
	"type": "input",
	"value": "",
	"icon": "",
	"name": "inputValue",
	"column": [12,12,12,12],
    "placeholder": "输入吧少年",
    "tip": "必选哦!"
}
```
