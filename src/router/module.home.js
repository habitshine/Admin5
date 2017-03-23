import HomeView from '../views/HomeView'

export var routes = [
    { path: '/', component: HomeView, name: 'homeView' },
    { path: 'login', redirect: '/login' },
    { path: 'category', redirect: '/' },
    { path: 'category/goods', redirect: '/index' }, {
        path: 'readonly',
        component: resolve => {
            require.ensure(['../views/ReadOnlyView'], () => {
                resolve(require('../views/ReadOnlyView'))
            })
        },
        name: 'readonly'
    }, {
        path: 'category/goods/list',
        component: resolve => {
            require.ensure(['../views/ListView'], () => {
                resolve(require('../views/ListView'))
            })
        },
        name: 'list'
    }, {
        path: 'category/goods/add',
        component: resolve => {
            require.ensure(['../views/AddView'], () => {
                resolve(require('../views/AddView'))
            })
        },
        name: 'add'
    }, {
        path: 'category/goods/edit',
        component: resolve => {
            require.ensure(['../views/EditView'], () => {
                resolve(require('../views/EditView'))
            })
        },
        name: 'edit'
    }
]
