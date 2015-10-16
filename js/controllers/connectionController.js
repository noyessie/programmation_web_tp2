/**
 * Created by James on 15/10/2015.
 */

applicationModule.controller('connectionController', function($scope , userFactory) {
	$scope.login = function () {
        userFactory.addUserInfos($scope.newUserInfos);
    }
});