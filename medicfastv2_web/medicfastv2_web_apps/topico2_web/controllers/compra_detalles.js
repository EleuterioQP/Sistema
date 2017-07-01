app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("Compra_detalleCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.compra_detalle = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Compra_detalle.query(params, function(r) {
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
            topico2Service.Compra_detalle.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la compra_detalle:" + JSON.stringify(d));
                toastr.success('Se eliminó la compra_detalle ' + d.autoconsumo, 'compra_detalle');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update compra_detalle
// =========================================================================
.controller("Compra_detalleSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.compra_detalle = {};

    $scope.sel = function() {
        topico2Service.Compra_detalle.get({ id: $stateParams.id }, function(r) {
            $scope.compra_detalle = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.compra_detalle.id) {
            topico2Service.Compra_detalle.update({ id: $scope.compra_detalle.id }, $scope.compra_detalle, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la compra_detalle ' + r.autoconsumo, 'compra_detalle');
                $state.go('topico2.topico2.compra_detalles');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Compra_detalle.save($scope.compra_detalle, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la compra_detalle ' + r.autoconsumo, 'compra_detalle');
                $state.go('topico2.topico2.compra_detalles');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.compra_detalles');
    };
});
