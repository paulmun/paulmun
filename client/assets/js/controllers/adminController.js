app.controller('adminController', ['$scope', '$location', 'resumeFactory', function($scope, $location, resumeFactory){

$scope.experience = {};
$scope.experience.experiences = [];
$scope.preview = [];

$scope.moreExperience = function(){
	console.log('adding');
	$scope.experience.experiences.push('');
}

$scope.addToResume = function(){
	resumeFactory.create($scope.experience, function(data){
		if(data.errors)$scope.errors = data.errors;
		$scope.experience = {};
	});
}

}]);