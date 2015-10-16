applicationModule.controller("detailBookController" , function($scope , booksFactory , $routeParams){
	id = $routeParams.id || 0;
	$scope.book = booksFactory.getBook(id);
	$scope.merci = "tk";
});