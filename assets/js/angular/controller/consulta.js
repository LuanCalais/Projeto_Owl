var myApp = angular.module("paginaInicial").controller("controller_login", function ($scope, $http) {

	$scope.formLogin = function () {
		$scope.usuario = {
			nome: '',
			senha: ''
		}
	}

	$scope.formLogin();

	$scope.botaoClose = function (usuario) {
		// console.log($scope);

		//console.log('Funcao botao')
		// console.log(usuario);

		//Limpa mensagens de erro login transformando os inputs em virgens 
		$scope.form_LogUsuario.$setPristine();

		//Limpa mensagens de erro cadastro transformando os inputs em virgens
		// $scope.form_LogUsuario.$setPristine();

		// Limpa valores login
		$scope.formLogin();

		// Volta Scroll para o body
		$('body').css({
			'overflow-y': 'initial'
		});

		$scope.load = false;
	}

	$scope.load = false;

	$scope.logar = function (usuario) {

		var secret = "6LevS1ocAAAAAIdK2KStJhnfLgjc0PM_e26-sZ_H";
		var urlCaptcha = "https://www.google.com/recaptcha/api/siteverify";

		$scope.load = true;

		$http.post("areadocliente/helpers/login.php", { 'tlogin': usuario.nome, 'tsenha': usuario.senha, 'token': usuario.token_response, 'secret': secret, 'urlCaptcha': urlCaptcha }).then(successCallback, errorCallback);
		function successCallback(response) {
			// console.log(response.data);
			if (response.data.return == '0') {
				let msg = response.data.mensagem;
				$('#erroMensagem').text(msg);
				$('#erroLogin').modal('show');

				// console.log(msg)				// $("#return4").slideDown(300).fadeIn(500).html(response.mensagem);
				// $("#logar").show();
				// document.form_login.senha.focus().stop();
				$scope.load = false;
				$scope.form_LogUsuario.$setPristine();
			}
			if (response.data.return == '1') {
				window.location.href = "areadocliente";
			}

		}

		function errorCallback(error) {
			console.log(error);
		}
	}


});