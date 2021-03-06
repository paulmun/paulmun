(function(){
	angular.module('main').controller('resumeController', resumeController);

	function resumeController($scope, $location, resumeFactory){
		$scope.resume = [];
		$scope.expFold = [];
		$scope.foldClass = [
			'expHidden',
			'expHidden',
			'expHidden',
			'expHidden',
			'expHidden',
			'expHidden'
		];
		$scope.plusMinus = [
			'plus',
			'plus',
			'plus',
			'plus',
			'plus',
			'plus'
		];

		$scope.darkHeader = 'darkHeader'

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

	};
})();