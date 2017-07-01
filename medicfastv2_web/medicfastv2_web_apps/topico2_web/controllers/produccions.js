app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("ProduccionCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.produccion = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Produccion.query(params, function(r) {
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
            topico2Service.Produccion.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la produccion:" + JSON.stringify(d));
                toastr.success('Se eliminó la produccion ' + d.nombre_certificadora, 'produccion');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update produccion
// =========================================================================
.controller("ProduccionSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.produccion = {
        produccion_tipo_choice: 'CA',
    };

    $scope.sel = function() {
        topico2Service.Produccion.get({ id: $stateParams.id }, function(r) {
            $scope.produccion = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.produccion.id) {
            topico2Service.Produccion.update({ id: $scope.produccion.id }, $scope.produccion, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la produccion ' + r.nombre_certificadora, 'produccion');
                $state.go('topico2.topico2.produccions');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Produccion.save($scope.produccion, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la produccion ' + r.nombre_certificadora, 'produccion');
                $state.go('topico2.topico2.produccions');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.produccions');
    };

    $scope.produccion_tipo_choices = ('CONVENCIONAL ORGANICO'
    ).split(' ').map(function(state) {
        return {abbrev: state};
      });
});
