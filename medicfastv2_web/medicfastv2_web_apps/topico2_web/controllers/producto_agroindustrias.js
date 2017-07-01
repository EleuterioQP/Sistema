app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("Producto_agroindustriaCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.producto_agroindustria = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Producto_agroindustria.query(params, function(r) {
            $scope.lista = r;
            //$scope.options = r.options;
            $scope.isLoading = false;
        }, function(err) {
            $log.log("Error in list:" + JSON.stringify(err));
            toastr.error(err.data.results.detail, err.status + ' ' + err.statusText);
        });
    };
    $scope.list(params);

    $scope.buscar = function() {
        params.page = 1;
        params.fields = $scope.fields;
        params.query = $scope.query;
        $scope.list(params);
    };

    $scope.onReorder = function(order) { //TODO
        $log.log('Order: ' + order);
    };

    $scope.delete = function(d) {
        if ($window.confirm("Seguro?")) {
            topico2Service.Producto_agroindustria.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la producto_agroindustria:" + JSON.stringify(d));
                toastr.success('Se eliminó la producto_agroindustria ' + d.codigo, 'producto_agroindustria');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update producto_agroindustria
// =========================================================================
.controller("Producto_agroindustriaSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.producto_agroindustria = {};

    $scope.sel = function() {
        topico2Service.Producto_agroindustria.get({ id: $stateParams.id }, function(r) {
            $scope.producto_agroindustria = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.producto_agroindustria.id) {
            topico2Service.Producto_agroindustria.update({ id: $scope.producto_agroindustria.id }, $scope.producto_agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la producto_agroindustria ' + r.codigo, 'producto_agroindustria');
                $state.go('topico2.topico2.producto_agroindustrias');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Producto_agroindustria.save($scope.producto_agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la producto_agroindustria ' + r.codigo, 'producto_agroindustria');
                $state.go('topico2.topico2.producto_agroindustrias');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.producto_agroindustrias');
    };
});
