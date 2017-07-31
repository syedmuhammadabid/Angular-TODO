var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    var i = 0;
    $scope.tweet = {};
    $scope.tweets = [];
    $scope.setTweet = function (tweet) {
        console.log($scope.tweets[tweet.id - 1]);
        if ($scope.tweets[tweet.id - 1] == null) {
            tweet.id = ++i;
            tweet.date = new Date().toLocaleString();
            $scope.tweets.push(tweet);
            $scope.tweet = {};

        }
        else {
            console.log($scope.tweets[$index]);
            $scope.tweets[tweet.id + 1] = {
                title: $scope.tweet.title,
                description: $scope.tweet.description
            };
            $scope.tweet = {};
        }
    };
    $scope.clear = function () {
        $scope.tweet = {};
    };

    $scope.edit = function (tweet) {
        $scope.tweet.title = tweet.title;
        $scope.tweet.description = tweet.description;
    };

    $scope.delete = function ($index) {
        var con = confirm("Are you sure ?");
        if (con == true) {
            $scope.tweets.splice($index, 1);
        }
    };

});