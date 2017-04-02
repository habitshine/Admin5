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
    path: '*/(add|auth)+',
    component: resolve => {
        require.ensure(['../views/template/AddView'], () => {
            resolve(require('../views/template/AddView'))
        });
    },
    name: 'addView'
}, {
    path: '*/(edit|set|save)+',
    component: resolve => {
        require.ensure(['../views/template/EditView'], () => {
            resolve(require('../views/template/EditView'))
        });
    },
    name: 'editView'
}, {
    path: '*/(list|index|show|statistics)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    },
    name: 'listView'
}]
