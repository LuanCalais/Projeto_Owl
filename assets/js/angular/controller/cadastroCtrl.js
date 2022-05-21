angular.module('myApp').controller('cadastrarCtrl', function ($scope, $http) {

    $scope.usuario;

    $scope.limpaDados = function () {
        $scope.usuario.email = '';
        $scope.usuario.name = '';
        $scope.usuario.senha = '';

        //Limpa mensagens de erro login transformando os inputs em virgens 
        $scope.form.cad .$setPristine();
    }

    $scope.getDados = function (usuario) {
        console.log(usuario);
    }

})