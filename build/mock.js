var fs = require('fs');
var methods = ['get', 'post', 'put', 'delete'];

module.exports = function(express, app) {
    // 使用 Mock
    var Mock = require('mockjs');
    var bodyParser = require('body-parser')
    app.use('/mock', express.static('./src/mock/'));


    app.get('/mock/menu', function(req, res) {
        var menu = fs.readFileSync('./src/mock/menu.json', 'utf8');

        var data = {
            status: 1,
            data: {
                menu: JSON.parse(menu)
            },
            message: '操作成功!'
        };
        res.json(data);
    });



    /*
     * 列表页模板数据
     */
    app.get('/mock/listView', function(req, res) {
        var data = fs.readFileSync('./src/mock/listView.json', 'utf8');
        var json = JSON.parse(data);
        setTimeout(() => {
            res.send(JSON.stringify(json, null, 4));
        }, 300);
    });

    /*
     * 新增页模板数据
     */
    app.get('/mock/addView', function(req, res) {
        var data = fs.readFileSync('./src/mock/addView.json', 'utf8');
        var json = JSON.parse(data);
        setTimeout(() => {
            res.send(JSON.stringify(json, null, 4));
        }, 300);
    });

    /*
     * 编辑页模板数据
     */
    app.get('/mock/editView', function(req, res) {
        var data = fs.readFileSync('./src/mock/editView.json', 'utf8');
        var json = JSON.parse(data);
        setTimeout(() => {
            res.send(JSON.stringify(json, null, 4));
        }, 300);
    });

    /*
     * 表格数据(table)
     */
    app.get('/mock/table', function(req, res) {
        var pageCount = 15;
        // 生成limit条数据
        limit = req.query.limit;
        page = req.query.page;
        var mock_config = { status: 1, data: { list: [], count: pageCount } };

        mock_config.data['list|' + limit] = [{
            'id|+1': page * limit,
            'title': '@ctitle(7,25)',
            'desc': '@cword(10, 50)',
            'create_time': '@datetime(\'yyyy-MM-dd HH:mm:ss\')',
            'category': '@cword(3,5)',
            'status': 1
        }];


        if (pageCount >= req.query.page) {
            setTimeout(function() {
                var data = Mock.mock(mock_config);
                res.json(data);
            }, 300);
        } else {
            var data = {
                status: 0,
                message: '无数据!'
            }
            res.json(data);
        }
    });


    /*
     * 联动数据
     */
    app.get('/mock/children', function(req, res) {
        var id = req.query.id;
        var mock_config = { 'status': 1, 'data': [] };
        mock_config['data|10'] = [{
            'value|+1': 1,
            'label': '@ctitle(2,7)',
            'disable': false
        }];
        var json = Mock.mock(mock_config);

        setTimeout(() => {
            res.send(JSON.stringify(json, null, 4));
        }, 300);
    });



    /*
     * 伪装post请求
     */
    // 解析req.body
    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.post('/mock/login', function(req, res) {
        if (10 > req.body.userName) {
            var data = {
                status: 1,
                data: {
                    accessToken: req.body.userName + 'ahkjrtklejwkjke2342sdsdj32l4k32hk'
                },
                message: '操作成功!',

            };
        } else {
            var data = {
                status: 0,
                message: '操作失败!'
            };
        }

        var json = JSON.stringify(data, null, 4);
        // 返回数据
        // setTimeout(function() {
        res.send(json);
        // }, 1000);
    });

    // resful的成功/失败
    methods.forEach(method => {
        app[method]('/mock/success', function(req, res) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
            res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
            var data = {
                status: 1,
                message: method + ' 成功！'
            };
            var json = JSON.stringify(data, null, 4);
            res.send(json);
        });

        app[method]('/mock/error', function(req, res) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
            res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
            var data = {
                "status": 0,
                "message": method + '失败！'
            };
            var json = JSON.stringify(data, null, 4);
            res.send(json);
        });
    });

    /*伪装上传服务器*/
    app.use('/uploads', express.static('./uploads/'));
    var uploadDir = './uploads';
    var multiparty = require('multiparty');
    app.post('/mock/upload', function(req, res) {
        // 建立上传文件夹
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        var form = new multiparty.Form({ uploadDir: uploadDir });

        form.on('error', function(err) {
            console.log('Error parsing form: ' + err.stack);
        });

        form.parse(req, function(err, fields, files) {

            var filesTmp = JSON.stringify(files, null, 2);
            if (err) {
                console.log('parse error: ' + err);
                res.send("写文件操作失败。");
            } else {
                var result = {
                    status: 1,
                    data: {
                        url: files.file[0].path,
                        id: Mock.Random.natural()
                    }
                };
                res.json(result);
            }
        });
    });

    console.log('Mock数据初始化完成！');
}
