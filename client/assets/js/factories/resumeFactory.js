 app.factory('resumeFactory', ['$http', function($http){

	function ResumeFactory(){
		this.create = function(experience, callback){
			$http.post('/experience', experience).then(function(returnData){
				console.log(returnData);
				if(returnData.data.errors){
					console.log(returnData.data.errors);
					callback(returData.data);
				}
				else{
					callback(returnData.data);
				}
			});
		}

		this.all = function(callback){
			$http.get('/resume').
			then(function(returnData){
				console.log(returnData);
				if(returnData.data.errors){
					console.log(returnData.data.errors);
					callback(returnData.data);
				}
				else{
					callback(returnData.data);
				}
			})
		}

		this.destroy = function(id, callback){
			console.log('factory')
			$http.delete('/resume/'+id).then(function(returnData){
				console.log(returnData);
				callback(returnData.data);
			})
		}

	}
	return new ResumeFactory();
}]);
		
		