
var sampleApp = angular.module('sampleApp', []);
 
sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: 'templates/add_order.html',
        controller: 'AddOrderController'
    }).
        when('/ShowOrder/:orderId', {
	templateUrl: 'templates/show_order.html',
	controller: 'ShowOrderController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);
 
 
sampleApp.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
 
 
sampleApp.controller('ShowOrderController', function($scope, $routeParams) {

	
	$scope.order_id = $routeParams.orderId;

});