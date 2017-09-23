var app = angular.module('angularjsNodejsTutorial',[]);
app.controller('myController', function($scope, $http) {
    
    $scope.Submit = function() {
        $scope.data = [];
        var request = $http.get('/sqlFuntion/' + $scope.email);
        request.success(function(data) {
            $scope.data = data;
        });
        request.error(function(data){
            console.log('Error: ' + data);
        });
    
    //$window.location.href="/hello.html";
    };
    /*
     $scope.Authenticate = function() {
        var request = $http.get('/validate/'+$scope.user+'&'+$scope.password);
        request.success(function (data) {
            console.log("Back again in signUp Controller");
            $scope.answer=data;
           if(data[0].IsAdmin==1)
            {

                //$location.path('/admin');
                //$location.replace();
                $window.location.href="/admin_recipe";
            }
            else
               $window.location.href="/user/"+$scope.user;
        });
        request.error(function (data) {
            console.log('Error: ' + data);
        });
    };*/
});