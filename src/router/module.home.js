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
    path: '*/(add)+',
    component: resolve => {
        require.ensure(['../views/template/AddView'], () => {
            resolve(require('../views/template/AddView'))
        });
    }
}, {
    path: '*/(auth)+',
    component: resolve => {
        require.ensure(['../views/template/AddView'], () => {
            resolve(require('../views/template/AddView'))
        });
    }
}, {
    path: '*/(edit)+',
    component: resolve => {
        require.ensure(['../views/template/EditView'], () => {
            resolve(require('../views/template/EditView'))
        });
    }
}, {
    path: '*/(set)+',
    component: resolve => {
        require.ensure(['../views/template/EditView'], () => {
            resolve(require('../views/template/EditView'))
        });
    }
}, {
    path: '*/(save)+',
    component: resolve => {
        require.ensure(['../views/template/EditView'], () => {
            resolve(require('../views/template/EditView'))
        });
    }
}, {
    path: '*/(list)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}, {
    path: '*/(index)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}, {
    path: '*/(readonly)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}, {
    path: '*/(show)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}, {
    path: '*/(view)*',
    component: resolve => {
        require.ensure(['../views/template/ListView'], () => {
            resolve(require('../views/template/ListView'))
        });
    }
}]
