
app
//------------------------------
// TODO: API menu
// por lo pronto colocar aqui el menu para su Modelo, vease test1
//------------------------------
    .factory("menuService", function(authService) {


    var sections = [
        /*
        {
          title: 'Getting Started',
          state: 'getting-started',
          url: '/getting-started',
          type: 'link'
        }
        */
    ];

    
    sections.push({

            menu: [{
                title: 'Asociaciones',
                type: 'toggle',
                state: 'topico2.topico2',
                menu_items: [  {
                    title: 'Registro Producto',
                    state: 'topico2.topico2.productos',
                    type: 'link'
                },
                {
                    title: 'RegistroAsociacion',
                    state: 'topico2.topico2.asociacions',
                    type: 'link'
                },
                {
                    title: 'Registro Productor',
                    state: 'topico2.topico2.productors',
                    type: 'link'
                },
                {
                    title: 'RegistroProduccion',
                    state: 'topico2.topico2.produccions',
                    type: 'link'
                },

              

               

                ]
            }]
        });
    sections.push({

            menu: [{
                title: 'Comercializacion',
                type: 'toggle',
                state: 'topico2.topico2',
                menu_items: [
                {
                    title: 'Registro Empresa',
                    state: 'topico2.topico2.empresas',
                    type: 'link'
                },
                {
                    title: 'Registro Compras',
                    state: 'topico2.topico2.compras',
                    type: 'link'
                },
                {
                    title: 'Compra Detalles',
                    state: 'topico2.topico2.compra_detalles',
                    type: 'link'
                },


              

               

                ]
            }]
        });
    sections.push({

            menu: [{
                title: 'Agroindustria',
                type: 'toggle',
                state: 'topico2.topico2',
                menu_items: [
                {
                    title: 'RegistroAgroindustria',
                    state: 'topico2.topico2.agroindustrias',
                    type: 'link'
                },
                {
                    title: 'ProductoAgroindustria',
                    state: 'topico2.topico2.producto_agroindustrias',
                    type: 'link'
                },
                {
                    title: 'ServicioAgroindustria',
                    state: 'topico2.topico2.servicio_agroindustrias',
                    type: 'link'
                },


              

               

                ]
            }]
        });



        




    


    authService.getMenu().then(function(r) {
        menu = r.data;
        console.log("menuService.authService.getMenu():" + JSON.stringify(menu));
        sections.push(

            menu
        );

    }, function(error) {
        console.log("error in menuService.authService.getMenu():" + JSON.stringify(error));
    });








    return {
        sections: sections,
    };
});





