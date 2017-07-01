app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("ProductorCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.productor = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Productor.query(params, function(r) {
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
            topico2Service.Productor.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la productor:" + JSON.stringify(d));
                toastr.success('Se eliminó la productor ' + d.nombre, 'productor');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update productor
// =========================================================================
.controller("ProductorSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.productor = {};

    $scope.sel = function() {
        topico2Service.Productor.get({ id: $stateParams.id }, function(r) {
            $scope.productor = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.productor.id) {
            topico2Service.Productor.update({ id: $scope.productor.id }, $scope.productor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la productor ' + r.nombre, 'productor');
                $state.go('topico2.topico2.productors');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Productor.save($scope.productor, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la productor ' + r.nombre, 'productor');
                $state.go('topico2.topico2.productors');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.productors');
    };
    $scope.produccion_tipo_choices = ('GERENTE_ADMINISTRATIVO GERENTE_COMERCIAL GERENTE_GENERAL GERENTE_OPERACIONES GERENTE_OPERACIONES'
    ).split(' ').map(function(state) {
        return {abbrev: state};
      });
});
