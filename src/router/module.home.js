import SmartView from '../views/_SmartView'

export var routes = [{
        path: '/',
        component: resolve => {
            require.ensure(['../views/HomeView'], () => {
                resolve(require('../views/HomeView'))
            })
        },
        name: 'homeView'
    }, {
        path: 'readonly',
        component: resolve => {
            require.ensure(['../views/ReadOnlyView'], () => {
                resolve(require('../views/ReadOnlyView'))
            })
        },
        name: 'readonlyView'
    },
    {
        path: 'draggable',
        component: resolve => {
            require.ensure(['../views/DraggableView'], () => {
                resolve(require('../views/DraggableView'))
            })
        },
        name: 'DraggableView'
    },
    { path: '*', component: SmartView, name: 'SmartView' },
]
