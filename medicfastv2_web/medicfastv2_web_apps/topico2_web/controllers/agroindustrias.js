app
// =========================================================================
// Show View and Delete historia 
// =========================================================================
    .controller("AgroindustriaCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.fields = 'name,codename';
    var params = {};
    $scope.lista = [];
    $scope.agroindustria = {};

    
    //$window.location = "#" + $location.path();

    $scope.list = function(params) {
        $scope.isLoading = true;
        topico2Service.Agroindustria.query(params, function(r) {
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
            topico2Service.Agroindustria.delete({ id: d.id }, function(r) {
                $log.log("Se eliminó la agroindustria:" + JSON.stringify(d));
                toastr.success('Se eliminó la agroindustria ' + d.nombre, 'agroindustria');
                $scope.list(params);
            }, function(err) {
                $log.log("Error in delete:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

})

// =========================================================================
// Create and Update Agroindustria
// =========================================================================
.controller("AgroindustriaSaveCtrl", function($scope, $state, $stateParams, topico2Service, $window, $mdDialog, $log, toastr) {
    //Valores iniciales
    $scope.agroindustria = {};

    $scope.sel = function() {
        topico2Service.Agroindustria.get({ id: $stateParams.id }, function(r) {
            $scope.agroindustria = r;
        }, function(err) {
            $log.log("Error in get:" + JSON.stringify(err));
            toastr.error(err.data.detail, err.status + ' ' + err.statusText);
        });
    };
    if ($stateParams.id) {
        $scope.sel();
    }

    $scope.save = function() {
        if ($scope.agroindustria.id) {
            topico2Service.Agroindustria.update({ id: $scope.agroindustria.id }, $scope.agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se editó la agroindustria ' + r.nombre, 'agroindustria');
                $state.go('topico2.topico2.agroindustrias');
            }, function(err) {
                $log.log("Error in update:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        } else {
            topico2Service.Agroindustria.save($scope.agroindustria, function(r) {
                $log.log("r: " + JSON.stringify(r));
                toastr.success('Se insertó la agroindustria ' + r.nombre, 'agroindustria');
                $state.go('topico2.topico2.agroindustrias');
            }, function(err) {
                $log.log("Error in save:" + JSON.stringify(err));
                toastr.error(err.data.detail, err.status + ' ' + err.statusText);
            });
        }
    };

    $scope.cancel = function() {
        $state.go('topico2.topico2.agroindustrias');
    };
});
