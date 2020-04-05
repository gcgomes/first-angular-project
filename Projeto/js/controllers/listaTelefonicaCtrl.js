angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
  $scope.app = "Lista Telefônica";

  var carregarOperadoras = function () {
    $http.get("http://localhost:3412/operadoras").success(function (data) {
      $scope.operadoras = data;
    })
  };

  var carregarContatos = function () {
    $http.get("http://localhost:3412/contatos").success(function (data) {
      $scope.contatos = data;
    }).error((data) => {
      $scope.message = "Aconteceu um problema: " + data;
    })
  };

  $scope.adicionarContato = function (contact) {
    // Método incorreto
    // $scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
    // Método correto (utilizando parâmetros (nome, telefone)
    // $scope.contatos.push({nome: nome, telefone: telefone});
    // Otimização (utiliza um objeto como parâmetro)
    $http.post("http://localhost:3412/contato", contact).success(function () {
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
      carregarContatos();
    });
  };
  $scope.apagarContatos = function (contacts) {
    $scope.contatos = contacts.filter(function (contact) {
      if (!contact.selected) return contact;
    });
  };
  $scope.isContatoSelecionado = function (contacts) {
    // return contacts.some(function (contact) {
    //   return contact.selected;
    // });
  };
  $scope.ordenarPor = function (campo) {
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
  };

  carregarOperadoras();
  carregarContatos();
});