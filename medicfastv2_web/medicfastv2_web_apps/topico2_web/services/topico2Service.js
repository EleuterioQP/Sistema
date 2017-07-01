app

    .factory("topico2Service", function($resource, configTopico2) {
    var url = configTopico2.topico2Url;
    return {

        Producto: $resource(url + "productos/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },

        }),

        Asociacion: $resource(url + "asociacions/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

        Empresa: $resource(url + "empresas/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

        Agroindustria: $resource(url + "agroindustrias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

        Compra: $resource(url + "compras/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),
        Compra_detalle: $resource(url + "compra_detalles/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),
        Producto_agroindustria: $resource(url + "producto_agroindustrias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),
        Servicio_agroindustria: $resource(url + "servicio_agroindustrias/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),
        Productor: $resource(url + "productors/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

        Produccion: $resource(url + "produccions/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),

        Variedad: $resource(url + "variedads/:id/", { 'id': '@id' }, {
            "update": { method: 'PUT' },
            }),







       

       


       };
});
