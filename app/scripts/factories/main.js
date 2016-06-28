'use strict';


angular.module('poleTestApp').factory('getOtpFactory',function($resource, $scope){
	return $resource(
        "/assignments/:id/:action.json", {id: "@id"},
        {
            'generateotp': {
                method : 'POST',
                url : 'http://poletalks.com:1456/generateotp',
                headers: {'Content-Type': 'application/json'},
                data :JSON.stringify({'mobile':$scope.user.phone, 'country':$scope.value.callingcode})
            }
        }
    );

});
