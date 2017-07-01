var baseUrl = 'https://boxing-leaf-10460.herokuapp.com/';
var loginUrl = 'http://104.197.16.251:9001/auth_web/';

var config = {
    baseUrl: baseUrl,
    loginUrl: loginUrl,
};

app.value('config', config);

app
    .config(function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
        $httpProvider.interceptors.push('authInterceptorService');
    })

.run(function($rootScope, $state, $stateParams, $window, authService) {
    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    /*******************************agregado**************************/
    //console.log("run");

    authService.fillAuthData();
    if (authService.authentication.isAuth === false) {
        //$window.location = loginUrl;
    }
    /******************************************************************/

})


.config(function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
})

.config(function($mdDateLocaleProvider, $provide) {

    $mdDateLocaleProvider.shortDays = [
        'Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'
    ];
    
    // Can change week display to start on Domingo.
    $mdDateLocaleProvider.firstDayOfWeek = 0;

    // Example uses moment.js to parse and format dates.
    $mdDateLocaleProvider.parseDate = function(dateString) {
        var m = moment(dateString, 'DD/MM/YYYY', true);
        return m.isValid() ? m.toDate() : new Date(NaN);
    };
    $mdDateLocaleProvider.formatDate = function(date) {
        if (angular.isDate(date)) {
            var m = moment(date);
            return m.isValid() ? m.format('DD/MM/YYYY') : '';
        }
        return '';
    };

})

.config(
    function($mdIconProvider, $$mdSvgRegistry) {
        // Add default icons from angular material para versiones no estables mayores a v1.0.9
        // la version v1.0.9 no necesita hacer esto
        $mdIconProvider
            .icon('md-close', $$mdSvgRegistry.mdClose)
            .icon('md-menu', $$mdSvgRegistry.mdMenu)
            .icon('md-toggle-arrow', $$mdSvgRegistry.mdToggleArrow);
    }
);



app.constant('ROUTERS_T', [{
    "estado.nombre.1": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    }

}, {
    "estado.nombre.2": {
        "url": "/url2",
        "data": {
            "section": "Menu name2",
            "page": "Menu item name2"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model2/index.html"
    }

}]);


app.constant('ROUTERS', [{
    "estado.nombre": {
        "url": "/url",
        "data": {
            "section": "Menu name",
            "page": "Menu item name"
        },
        "templateUrl": "appname_web_apps/appname_web/views/model/index.html"
    },

}, {
    "topico2": {
        "url": "/topico2",
        "views": {
            "": {
                "templateUrl": "app/views/layout.html"
            },
            "aside": {
                "templateUrl": "app/views/aside.html"
            },
            "content": {
                "templateUrl": "app/views/content.html"
            }
        }
    },


   
    "topico2.topico2": {
        "url": "/topico2",
        "template": "<div ui-view ></div>"
    }
}, {
    "topico2.topico2.productos": {
        "url": "/productos",
        "data": {
            "section": "Producto",
            "page": "Productos"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productos/index.html"
    },
    "topico2.topico2.productosNew": {
        "url": "/productos/new",
        "data": {
            "section": "Producto",
            "page": "Productos"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productos/form.html"
    },
    "topico2.topico2.productosEdit": {
        "url": "/productos/:id/edit",
        "data": {
            "section": "Producto",
            "page": "Productos"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productos/form.html"
    },

    "topico2.topico2.asociacions": {
        "url": "/asociacions",
        "data": {
            "section": "Asociacion",
            "page": "Asociacions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/asociacions/index.html"
    },
     "topico2.topico2.asociacionsNew": {
        "url": "/asociacions/new",
        "data": {
            "section": "Asociacion",
            "page": "Asociacions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/asociacions/form.html"
    },
    "topico2.topico2.asociacionsEdit": {
        "url": "/asociacions/:id/edit",
        "data": {
            "section": "Asociacion",
            "page": "Asociacions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/asociacions/form.html"
    },

     "topico2.topico2.empresas": {
        "url": "/empresas",
        "data": {
            "section": "Empresa",
            "page": "Empresas"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/empresas/index.html"
    },
     "topico2.topico2.empresasNew": {
        "url": "/empresas/new",
        "data": {
            "section": "Empresa",
            "page": "Empresas"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/empresas/form.html"
    },
    "topico2.topico2.empresasEdit": {
        "url": "/empresas/:id/edit",
        "data": {
            "section": "Empresa",
            "page": "Empresas"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/empresas/form.html"
    },
    "topico2.topico2.compras": {
        "url": "/compras",
        "data": {
            "section": "Compra",
            "page": "Compras"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compras/index.html"
    },
     "topico2.topico2.comprasNew": {
        "url": "/compras/new",
        "data": {
            "section": "Compra",
            "page": "Compras"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compras/form.html"
    },
    "topico2.topico2.comprasEdit": {
        "url": "/compras/:id/edit",
        "data": {
            "section": "Compra",
            "page": "Compras"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compras/form.html"
    },

    "topico2.topico2.compra_detalles": {
        "url": "/compra_detalles",
        "data": {
            "section": "Compra_detalle",
            "page": "Compra_detalles"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compra_detalles/index.html"
    },
     "topico2.topico2.compra_detallesNew": {
        "url": "/compra_detalles/new",
        "data": {
            "section": "Compra_detalle",
            "page": "Compra_detalles"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compra_detalles/form.html"
    },
    "topico2.topico2.compra_detallesEdit": {
        "url": "/compra_detalles/:id/edit",
        "data": {
            "section": "Compra_detalle",
            "page": "Compra_detalles"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/compra_detalles/form.html"
    },
    "topico2.topico2.productors": {
        "url": "/productors",
        "data": {
            "section": "Productor",
            "page": "Productors"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productors/index.html"
    },
     "topico2.topico2.productorsNew": {
        "url": "/productors/new",
        "data": {
            "section": "Productor",
            "page": "Productors"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productors/form.html"
    },
    "topico2.topico2.productorsEdit": {
        "url": "/productors/:id/edit",
        "data": {
            "section": "Productor",
            "page": "Productors"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/productors/form.html"
    },
    "topico2.topico2.produccions": {
        "url": "/produccions",
        "data": {
            "section": "Produccion",
            "page": "Produccions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/produccions/index.html"
    },
     "topico2.topico2.produccionsNew": {
        "url": "/produccions/new",
        "data": {
            "section": "Produccion",
            "page": "Produccions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/produccions/form.html"
    },
    "topico2.topico2.produccionsEdit": {
        "url": "/produccions/:id/edit",
        "data": {
            "section": "Produccion",
            "page": "Produccions"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/produccions/form.html"
    },
     "topico2.topico2.agroindustrias": {
        "url": "/agroindustrias",
        "data": {
            "section": "Agroindustria",
            "page": "Agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/agroindustrias/index.html"
    },
     "topico2.topico2.agroindustriasNew": {
        "url": "/agroindustrias/new",
        "data": {
            "section": "Agroindustria",
            "page": "Agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/agroindustrias/form.html"
    },
    "topico2.topico2.agroindustriasEdit": {
        "url": "/agroindustrias/:id/edit",
        "data": {
            "section": "Agroindustria",
            "page": "Agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/agroindustrias/form.html"
    },
    "topico2.topico2.producto_agroindustrias": {
        "url": "/producto_agroindustrias",
        "data": {
            "section": "Producto_agroindustria",
            "page": "Producto_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/producto_agroindustrias/index.html"
    },
     "topico2.topico2.producto_agroindustriasNew": {
        "url": "/producto_agroindustrias/new",
        "data": {
            "section": "Producto_agroindustria",
            "page": "Producto_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/producto_agroindustrias/form.html"
    },
    "topico2.topico2.producto_agroindustriasEdit": {
        "url": "/producto_agroindustrias/:id/edit",
        "data": {
            "section": "Producto_agroindustria",
            "page": "Producto_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/producto_agroindustrias/form.html"
    },
    "topico2.topico2.servicio_agroindustrias": {
        "url": "/servicio_agroindustrias",
        "data": {
            "section": "Servicio_agroindustria",
            "page": "Servicio_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/servicio_agroindustrias/index.html"
    },
     "topico2.topico2.servicio_agroindustriasNew": {
        "url": "/servicio_agroindustrias/new",
        "data": {
            "section": "Servicio_agroindustria",
            "page": "Servicio_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/servicio_agroindustrias/form.html"
    },
    "topico2.topico2.servicio_agroindustriasEdit": {
        "url": "/servicio_agroindustrias/:id/edit",
        "data": {
            "section": "Servicio_agroindustria",
            "page": "Servicio_agroindustrias"
        },
        "templateUrl": "medicfastv2_web_apps/topico2_web/views/servicio_agroindustrias/form.html"
    },




},


]);
