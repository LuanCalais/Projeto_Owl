angular.module('myApp').controller('logarCtrl', function($scope, $http){
    
    $scope.getDados = function(usuario){
        console.log(usuario);
    }

});