app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("AsociacionCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.asociacion = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Asociacion.query(params, function(r) {
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
            topico2Service.Asociacion.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la asociacion:" + JSON.stringify(d));
                toastr.success('Se eliminó la asociacion ' + d.actividad, 'asociacion');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update asociacion
// =========================================================================
.controller("AsociacionSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.asociacion = {};

    $scope.sel = function() {
        topico2Service.Asociacion.get({ id: $stateParams.id }, function(r) {
            $scope.asociacion = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.asociacion.id) {
            topico2Service.Asociacion.update({ id: $scope.asociacion.id }, $scope.asociacion, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la asociacion ' + r.actividad, 'asociacion');
                $state.go('topico2.topico2.asociacions');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Asociacion.save($scope.asociacion, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la asociacion ' + r.actividad, 'asociacion');
                $state.go('topico2.topico2.asociacions');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.asociacions');
    };
});
