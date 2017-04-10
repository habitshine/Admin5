# tree(树形, 无级)   

![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/tree.png?raw=true)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题|
|value| 默认值, 对应每个节点的value  |
|name   | ajax字段名, 服务端接收参数名  |
|is| 必须"tree"  |
|placeholder| placeholder |,
|column   | 对应bootstrap的栅格布局  |
|data[]| 节点集合 |
|data[].value| 节点值 |
|data[].label| 显示名 |
|data[].open| 是否展开, 默认为false即可 |
|data[].children[]| 节点集合 |


### 数据示例
``` json
{
    "title": "树形选择器",
    "value": "100",
    "name": "treeValue",
    "is": "tree",
    "placeholder": "请选择",
    "column": [
        12,
        12,
        2,
        2
    ],
    "data": [{
        "value": 1,
        "label": "欧洲",
        "open": true,
        "children": [{
            "value": 11,
            "label": "希腊",
            "open": true,
            "children": [{
                "value": 111,
                "label": "雅典"
            }]
        }, {
            "value": 22,
            "label": "意大利",
            "open": true,
            "children": [{
                "value": 222,
                "label": "都灵"
            }]
        }]
    }, {
        "value": 3,
        "label": "亚洲",
        "open": true,
        "children": [{
            "value": 33,
            "label": "中国",
            "open": true,
            "children": [{
                "value": 331,
                "label": "黑龙江",
                "open": true,
                "children": [{
                    "value": 3311,
                    "label": "哈尔滨"
                }, {
                    "value": 3312,
                    "label": "齐齐哈尔"
                }, {
                    "value": 3313,
                    "label": "牡丹江"
                }]
            }, {
                "value": 122,
                "label": "西安"
            }, {
                "value": 123,
                "label": "武汉"
            }]
        }, {
            "value": 44,
            "label": "日本",
            "open": true,
            "children": [{
                "value": 99,
                "label": "东京"
            }]
        }, {
            "value": 100,
            "label": "韩国"
        }]
    }, {
        "value": 8,
        "label": "地中海",
        "disable": true
    }]
}
```
