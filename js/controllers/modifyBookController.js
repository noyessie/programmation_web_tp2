/**
 * Created by James on 15/10/2015.
 */

/**
 * Created by James on 15/10/2015.
 */

applicationModule.controller('modifyBookController', function($scope, booksFactory) {

    $scope.selectedBook = {};
    $scope.selectedBook.number = 0;

    $scope.booksInfos = booksFactory.getBooksInfos();

    $scope.validateSearch = function () {
        alert('here');
        var bookInfoSplitted = $scope.enteredSearch.split(' - ');
        alert('Le titre ' + $scope.selectedBook.title);
        /*$scope.selectedBook.addOrder = bookInfoSplitted[0] - 1;
        $scope.selectedBook.title = bookInfoSplitted[1];
        $scope.selectedBook.author = bookInfoSplitted[2];
        $scope.selectedBook.edition = bookInfoSplitted[3];
        $scope.selectedBook.date = bookInfoSplitted[4];
        $scope.selectedBook.type = bookInfoSplitted[5];
        $scope.selectedBook.kind = bookInfoSplitted[6];
        $scope.selectedBook.number = (typeof $scope.selectedBook.number == 'undefined') ? 0 : bookInfoSplitted[7];*/
        $scope.selectedBook.title = bookInfoSplitted[0];
        $scope.selectedBook.author = bookInfoSplitted[1];
        $scope.selectedBook.edition = bookInfoSplitted[2];
        $scope.selectedBook.date = bookInfoSplitted[3];
    }

    $scope.modifyBook = function () {
        booksFactory.modifyBook($scope.selectedBook.addOrder, JSON.parse(JSON.stringify($scope.selectedBook)));
    }
});

