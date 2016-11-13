app.controller('resumeController', ['$scope', '$location', 'resumeFactory', function($scope, $location, resumeFactory){
	$scope.resume = [];
	$scope.expFold = [];
	$scope.foldClass = [
		'expHidden',
		'expHidden',
		'expHidden',
		'expHidden'
	];
	$scope.plusMinus = [
		'plus',
		'plus',
		'plus',
		'plus'
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
			$scope.plusMinus[idx] = 'minus';
		}
		else{
			$scope.foldClass[idx] = 'expHidden';
			$scope.plusMinus[idx] = 'plus';	
		}
		
	}

}]);