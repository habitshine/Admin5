# linkage(联动)   


![](https://github.com/383514580/Store/blob/master/admin5/docs/images/linkage.jpg?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|type| 必须"linkage"  |
|value| 默认值, 2部分组成, values对应children中的value, texts对应children中的label  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|placeholder   | 默认提示文字  |
|children   | 列表数据, 内容对应联动的列表  |
|children.label   | 当前级显示名  |
|children.name   | 获取数据时候,ajax对应的data的键值名|
|children.children   | 当前级下的选项  |
|children.children.value   | 选项值, 最终会传递到服务端的相关数据  |
|children.children.label   | 选线显示文字|

### 数据示例
``` json
{
    "title": "联动",
	"type": "linkage",
	"value": {"values": [1,1,1,1], "texts": ["世界", "亚洲", "中国", "香坊"]},
	"name": "linkageValue",
	"column": [12,12,12,12],
    "placeholder": "请选择",
    "children": [{
        "label": "一级",
        "name": "id1",
        "children": [{
            "value": 1,
            "label": "欧美",
        }, {
            "value": 2,
            "label": "日韩超级家具",
        }, {
            "value": 3,
            "label": "地中海",
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

}
```
