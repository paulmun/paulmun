app.controller('mainController', ['$scope', '$location', function($scope, $location){

	$scope.showMenu = true;
	$scope.menuClass = 'mobileMenu';
	$scope.menuExpand = function(){
		if($scope.showMenu == true){
			$scope.logoClass = 'logo2'
			console.log('clicked')
			$scope.menuClass = 'mobileMenu2'
			$scope.showMenu = false;
		}
		else if($scope.showMenu == false){
			$scope.logoClass = 'logo'
			console.log('clicked2')
			$scope.menuClass = 'mobileMenu'
			$scope.showMenu = true;
		}
	}
}]);