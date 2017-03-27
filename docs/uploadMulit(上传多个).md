# uploadMulit(上传多个)   
![](https://github.com/MaiYuan/Admin5/blob/master/docs/images/uploadMulit.png)

### 数据说明
|键名 |说明 |
| ------------ | ------------ |
|title| 标题文字  |
|type| 必须"uploadMulit"  |
|name   | ajax字段名, 服务端接收参数名  |
|column   | 对应bootstrap的栅格布局  |
|value   | 默认值, 无默认值用null表示, 默认值结构为  {"fileName": "显示的文件名","cover": "缩略图","id": "id","type": "'image'或者'file'","url": "文件地址"}|
|text   | 按钮文字  |
|url   | 接口地址  |
|url.upload   | 上传接口地址  |
|url.del   | 删除图片接口地址  |



### 数据示例
```json
{
    "title": "上传",
    "type": "uploadMulit",
    "name": "uploadMulitValue",
    "column": [12, 12, 12, 12],
    "value": [{
        "fileName": "1.jpeg",
        "id": 1223130728784302,
        "type": "image",
        "url": "https://cn.vuejs.org/images/logo.png"
    }, {
        "fileName": "2.jpeg",
        "id": 1000,
        "type": "image",
        "url": "https://cn.vuejs.org/images/logo.png"
    }],
    "text": "点击上传多个文件",
    "url": {
        "upload": "./mock/upload",
        "del": "./mock/success"
    }
}
```

                    
                    
