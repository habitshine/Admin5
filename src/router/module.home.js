export var routes = [{
    path: 'index/index',
    component: resolve => {
        require.ensure(['../views/HomeView'], () => {
            resolve(require('../views/HomeView'))
        });
    },
    name: 'homeView'
}, {
    path: 'goods/iframe',
    component: resolve => {
        require.ensure(['../views/template/IFrame'], () => {
            resolve(require('../views/template/IFrame'))
        });
    }
}, {
    path: 'readonly100',
    component: resolve => {
        require.ensure(['../views/ReadOnlyView'], () => {
            resolve(require('../views/ReadOnlyView'))
        });
    }
}, {
    path: 'draggable',
    component: resolve => {
        require.ensure(['../views/DraggableView'], () => {
            resolve(require('../views/DraggableView'))
        });
    },
    name: 'DraggableView'
}, {
    path: '*/(.)*(add|append|post)+(.)*',
    component: resolve => {
        require.ensure(['../views/template/AddView'], () => {
            resolve(require('../views/template/AddView'))
        });
    }
}, {
    path: '*/(.)*(edit|save|view|operate|setting|config|put)+(.)*',
    component: resolve => {
        require.ensure(['../views/template/EditView'], () => {
            resolve(require('../views/template/EditView'))
        });
    }
}, {
    path: '*/(.)*(list|index|get|table)+(.)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}]
