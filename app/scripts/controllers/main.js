'use strict';

/**
 * @ngdoc function
 * @name poleTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the poleTestApp
 */
angular.module('poleTestApp')
  .controller('MainCtrl', function ($scope, $http, usSpinnerService, $location) {
	    $http.get('http://restcountries.eu/rest/').then(function (response) {
     		$scope.content = response.data;
     		$scope.value = {callingcode	:'91'};
    	});

	$scope.removeNull = function(item) {
    	return item.callingcode;
    };

  $scope.getOtp = function (){
            $http({
                method : 'POST',
                url : 'http://poletalks.com:1456/generateotp',
                headers: {'Content-Type': 'application/json'},
                data :JSON.stringify({'mobile':$scope.user.phone, 'country':$scope.value.callingcode})
  			   }).then(function(response) {
                $scope.status = response.status;
                $scope.success = true;
              }, function(response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
            });
           usSpinnerService.spin('spinner-1');
  			console.log($scope.user.phone);
  			console.log($scope.value.callingcode);
    	};

   $scope.success=false;

  

  $scope.verifyOtp = function (){
              $http({
                  method : 'POST',
                  url : 'http://poletalks.com:1456/adduser',
                  headers: {'Content-Type': 'application/json'},
                  data :JSON.stringify({'mobile':$scope.user.phone, 'country':$scope.value.callingcode, 'otp':$scope.user.otp})
             }).then(function(response) {
                $scope.status = response.status;
                $scope.success = true;
                console.log($scope.status);
                $location.path('/about');
              }, function(response) {
                $scope.data = response.data || 'Request failed';
                $scope.status = response.status;
                console.log($scope.status);
                console.log($scope.data);
                $scope.wrongOtp = true;
            });
          console.log($scope.user.phone);
          console.log($scope.user.otp);
          console.log($scope.value.callingcode);
          
        };

});

