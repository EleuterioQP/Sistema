app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("EmpresaCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.empresa = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Empresa.query(params, function(r) {
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
            topico2Service.Empresa.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la empresa:" + JSON.stringify(d));
                toastr.success('Se eliminó la empresa ' + d.nombre, 'empresa');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update empresa
// =========================================================================
.controller("EmpresaSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.empresa = {};

    $scope.sel = function() {
        topico2Service.Empresa.get({ id: $stateParams.id }, function(r) {
            $scope.empresa = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.empresa.id) {
            topico2Service.Empresa.update({ id: $scope.empresa.id }, $scope.empresa, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la empresa ' + r.nombre, 'empresa');
                $state.go('topico2.topico2.empresas');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Empresa.save($scope.empresa, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la empresa ' + r.nombre, 'empresa');
                $state.go('topico2.topico2.empresas');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.empresas');
    };
});
