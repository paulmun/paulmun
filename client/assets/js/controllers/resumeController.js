app.controller('resumeController', ['$scope', '$location', 'resumeFactory', function($scope, $location, resumeFactory){
	$scope.resume = [];
	$scope.expFold = [];
	$scope.foldClass = [
		'expHidden',
		'expHidden',
		'expHidden',
		'expHidden'
	];

	resumeFactory.all(function(data){
		if(data.errors){
			$scope.errors = data.errors;
		}
		$scope.resume = data;
		console.log($scope.resume);
	});

	$scope.collapse = function(idx){
		if($scope.foldClass[idx] == 'expHidden'){
			$scope.foldClass[idx] = 'expShown';
		}
		else{
			$scope.foldClass[idx] = 'expHidden';	
		}
		
	}

}]);