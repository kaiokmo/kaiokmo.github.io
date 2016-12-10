var app = angular.module("lab2", ['ngMaterial']);

app.controller("lab2controller", function ($scope) {
	$scope.app = "Lab 2";

	$scope.tarefas = [{
		descricao: 'Levar o cachorro pra passear',
	}, {
		descricao: 'Estudar lógica',
	}, {
		descricao: 'Terminar o Lab de SI',
	}];

	$scope.tarefasSelecionadas = [];

	$scope.adicionarTarefa = function (tarefa) {
		$scope.tarefas.push(angular.copy(tarefa));
		delete $scope.item;
	};

	$scope.toggle = function (item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		} else {
			list.push(item);
		}
	};

	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};

	$scope.isIndeterminate = function () {
		return ($scope.tarefasSelecionadas.length !== 0 &&
			$scope.tarefasSelecionadas.length !== $scope.tarefas.length);
	};

	$scope.isChecked = function () {
		return $scope.tarefasSelecionadas.length === $scope.tarefas.length;
	};

	$scope.toggleAll = function () {
		if ($scope.tarefasSelecionadas.length === $scope.tarefas.length) {
			$scope.tarefasSelecionadas = [];
		} else if ($scope.tarefasSelecionadas.length === 0 || $scope.tarefasSelecionadas.length > 0) {
			$scope.tarefasSelecionadas = $scope.tarefas.slice(0);
		}
	};

	$scope.removeItem = function (item) {
		var index = $scope.tarefas.indexOf(item);
		if (index > -1) {
			$scope.tarefas.splice(index, 1);
		}
		var index = $scope.tarefasSelecionadas.indexOf(item);
		if (index > -1) {
			$scope.tarefasSelecionadas.splice(index, 1);
		}
		$scope.actualPercentage();
	};

	$scope.actualPercentage = function () {
		return (($scope.tarefasSelecionadas.length) / ($scope.tarefas.length || 1) * 100).toFixed(0);
	};
});