
applicationModule.controller('consultBookController' , function($scope , booksFactory){
	$scope.books = booksFactory.getBooks();
	
});