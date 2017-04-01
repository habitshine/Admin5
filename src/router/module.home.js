export var routes = [{
        path: '/',
        component: resolve => {
            require.ensure(['../views/HomeView'], () => {
                resolve(require('../views/HomeView'))
            });
        },
        name: 'homeView'
    }, {
        path: 'readonly',
        component: resolve => {
            require.ensure(['../views/ReadOnlyView'], () => {
                resolve(require('../views/ReadOnlyView'))
            });
        },
        name: 'readonlyView'
    }, {
        path: 'draggable',
        component: resolve => {
            require.ensure(['../views/DraggableView'], () => {
                resolve(require('../views/DraggableView'))
            });
        },
        name: 'DraggableView'
    }, {
        path: 'demo',
        component: resolve => {
            require.ensure(['../views/demo/ListView'], () => {
                resolve(require('../views/demo/ListView'))
            });
        },
        name: 'listView'
    }, {
        path: 'demo/add',
        component: resolve => {
            require.ensure(['../views/demo/AddView'], () => {
                resolve(require('../views/demo/AddView'))
            });
        },
        name: 'addView'
    }, {
        path: 'demo/edit',
        component: resolve => {
            require.ensure(['../views/demo/EditView'], () => {
                resolve(require('../views/demo/EditView'))
            });
        },
        name: 'editView'
    }
]
