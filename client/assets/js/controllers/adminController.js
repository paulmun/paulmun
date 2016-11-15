(function(){

	angular.module('main').controller('adminController', adminController);

	function adminController($scope, $location, resumeFactory){

		$scope.experience = {};
		$scope.experience.experiences = [];
		$scope.preview = [];
		$scope.resume = [];

		
		var update = function(){
			resumeFactory.all(function(data){
				if(data.errors){
					$scope.errors = data.errors;
				}
				$scope.resume = data;
			});
		}

		var folderInit = function(){
			for(var i = 0; i < $scope.resume.length; i++){
				if(!expFold[i]){
					$scope.expFold.push(true);
				}
			}
		}

		update();
		folderInit();

		$scope.deleteExp = function(id){
			console.log('front-control')
			resumeFactory.destroy(id, function(data){
				if(data.errors){
					$scope.errors = data.errors;
				}
				update();
			});
		}

		$scope.moreExperience = function(){
			console.log('adding');
			$scope.experience.experiences.push('');
		}

		$scope.addToResume = function(){
			resumeFactory.create($scope.experience, function(data){
				if(data.errors)$scope.errors = data.errors;
				update();
			});
			$scope.experience = {};
			$scope.experience.experiences = [];
		}

		$scope.textAreaAdjust = function(event) {
		  	event.target.style.height = "1px";
		 	event.target.style.height = (20+event.target.scrollHeight)+"px";
		}
	};
})();