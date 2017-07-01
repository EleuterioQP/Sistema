app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("Servicio_agroindustriaCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.servicio_agroindustria = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Servicio_agroindustria.query(params, function(r) {
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
            topico2Service.Servicio_agroindustria.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la servicio_agroindustria:" + JSON.stringify(d));
                toastr.success('Se eliminó la servicio_agroindustria ' + d.codigo, 'servicio_agroindustria');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update servicio_agroindustria
// =========================================================================
.controller("Servicio_agroindustriaSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.servicio_agroindustria = {};

    $scope.sel = function() {
        topico2Service.Servicio_agroindustria.get({ id: $stateParams.id }, function(r) {
            $scope.servicio_agroindustria = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.servicio_agroindustria.id) {
            topico2Service.Servicio_agroindustria.update({ id: $scope.servicio_agroindustria.id }, $scope.servicio_agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la servicio_agroindustria ' + r.codigo, 'servicio_agroindustria');
                $state.go('topico2.topico2.servicio_agroindustria');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Servicio_agroindustria.save($scope.servicio_agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la servicio_agroindustria ' + r.codigo, 'servicio_agroindustria');
                $state.go('topico2.topico2.servicio_agroindustrias');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.servicio_agroindustrias');
    };
});
