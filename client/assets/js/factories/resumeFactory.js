 app.factory('resumeFactory', ['$http', function($http){

	function ResumeFactory(){
		this.create = function(experience, calllback){
			$http.post('/experience', experience).then(function(returnData){
				console.log(returnData);
				if(returnData.data.errors){
					console.log(returnData.data.errors);
					callbac(returData.data);
				}
				else{
					console.log(returnData.data);
					callback(returnData.data);
				}
			});
		}

	}
	return new ResumeFactory();
}]);
		
		