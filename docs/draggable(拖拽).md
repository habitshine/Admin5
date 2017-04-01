# draggable(拖拽)   


![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/drag.png?raw=true)


### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|name| 名字  |
|month| 月份  |
|tags| 指标库标签名  |
|list   | 指标库所有的指标项  |
|list.name   | 指标名  |
|list.detail   | 指标详情  |
|list.id   | 指标id  |
|list.fixed   | 指标是否固定不可拖拽（默认false）  |
|list.type   | 指标类型，与tags对应，例如type为0的指标都在社会媒体类下面，以此类推  |
|list2   | 可编辑指标库所有的指标项 |

### 数据示例
``` json
                        {
                            "name":"X某某某X",
                            "month":12,
                            "tags":[
                                "社会媒体类",
                                "备选指标",
                                "订单处理类",
                                "商品指标",
                                "社会媒体类",
                                "备选指标",
                                "订单处理类",
                                "商品指标",
                                "社会媒体类",
                                "备选指标"
                            ],
                            "list":[
                                {
                                    "name": "前台接待客户满意度type0",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 0,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 1,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type000000",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 2,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前厅管理有效性type0000777799",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 3,
                                    "fixed": false,
                                    "type":0
                                },
                                {
                                    "name": "前台接待客户满意度type1",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 4,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前厅管理有效性type1",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 5,
                                    "fixed": false,
                                    "type":1
                                },
                                {
                                    "name": "前台接待客户满意度type2",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 6,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type2",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 7,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type22",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 8,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前厅管理有效性type22",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 9,
                                    "fixed": false,
                                    "type":2
                                },
                                {
                                    "name": "前台接待客户满意度type3",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 10,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type33",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 11,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前厅管理有效性type3",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 12,
                                    "fixed": false,
                                    "type":3
                                },
                                {
                                    "name": "前台接待客户满意度type4",
                                    "detail":"(接待不满意客户/接待总客户数)*100%",
                                    "id": 13,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type4",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 14,
                                    "fixed": false,
                                    "type":4
                                },
                                {
                                    "name": "前厅管理有效性type5",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 15,
                                    "fixed": false,
                                    "type":5
                                },
                                {
                                    "name": "前厅管理有效性type6",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 16,
                                    "fixed": false,
                                    "type":6
                                },
                                {
                                    "name": "前厅管理有效性type7",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 17,
                                    "fixed": false,
                                    "type":7
                                },
                                {
                                    "name": "前厅管理有效性type8",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 18,
                                    "fixed": false,
                                    "type":8
                                },
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 19,
                                    "fixed": false,
                                    "type":9
                                },
    
                            ],
                            "list2":[
                                {
                                    "name": "前厅管理有效性type9",
                                    "detail":"一定周期内工作出错率低于规定比例",
                                    "id": 20,
                                    "fixed": false,
                                    "type":9
                                }
                            ],
                        }
```
