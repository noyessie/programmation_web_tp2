/**
 * Created by James on 15/10/2015.
 */

applicationModule.controller('connectionController', function($scope , user) {
	$scope.login = function () {
        user.addUserInfos($scope.newUserInfos);
    }
});