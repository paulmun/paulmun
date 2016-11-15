app.controller('mainController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){

	$scope.showMenu = true;
	$scope.menuClass = 'mobileMenu';
	$scope.headerClass = 'header';

	$rootScope.$on("$routeChangeStart", function(){
		$scope.logoClass = 'logo';
		$scope.menuClass = 'mobileMenu';
		$scope.showMenu = true;
		$scope.headerClass = 'header';
	});

	$scope.menuExpand = function(){
		if($scope.showMenu == true){
			$scope.logoClass = 'logo2';
			$scope.menuClass = 'mobileMenu2';
			$scope.showMenu = false;
			$scope.headerClass = 'altHeader';
		}
		else if($scope.showMenu == false){
			$scope.logoClass = 'logo';
			$scope.menuClass = 'mobileMenu';
			$scope.showMenu = true;
			$scope.headerClass = 'header';
		}
	}

	$scope.log = function (snapIndex) {
        console.log('just snapped to', snapIndex);
    };

}]);