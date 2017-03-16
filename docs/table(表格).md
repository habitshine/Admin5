# table(表格)   


![](https://github.com/383514580/Store/blob/master/admin5/docs/images/table.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|status| 状态(1:成功, 0: 失败)  |
|message| 描述信息(字符串)  |
|data   | 数据  |
|data.count   | 总页数  |
|data.list   | 列表数据(数组) |
|data.list.id   | 必填属性 |
|data.list.status   | 必填属性, 默认为1即可 |


### 数据示例
``` json
{
	"status": 1,
	"data": {
		"count": 15,
		"list": [
				{"id": 1, "title": "标题1", "status": 1},
				{"id": 2, "title": "标题1", "status": 1}
			]
	}
}
```
