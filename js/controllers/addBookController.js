/**
 * Created by James on 15/10/2015.
 */

/**
 * Created by James on 15/10/2015.
 */

applicationModule.controller('addBookController', function($scope, booksFactory) {
    $scope.addBook = function () {
        booksFactory.addBook(JSON.parse(JSON.stringify($scope.newBook)));
        $$scope.updateStatus="Livre ajouté";
    }
});

