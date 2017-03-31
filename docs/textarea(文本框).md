# textarea(文本框)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/textarea.jpg?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|is| 必须"textarea"  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|title   | 标题文字  |
|height  | 文本框的默认高度  |
|resize  | 文本框是否可缩放  |

### 数据示例
``` json
{
	"is": "textarea",
	"name": "textareaValue",
    "column": [12, 12, 12, 12],
    "placeholder": "请输入您的id",
    "title": "文本框",
    "height": "100px",
    "resize": false               
}
```
