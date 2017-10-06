var app = angular.module('angularjsNodejsTutorial',[]);
app.controller('myController', function($scope, $http)
{
    $scope.message="";
    $scope.Submit = function()
    {
        var request = $http.get('/data/'+$scope.email);
        request.success(function(data)
        {
            $scope.data = data;
        });
        request.error(function(data)
        {
            console.log('err');
        });
    
    }; 
});

// To implement "Insert a new record", you need to:
// - Create a new controller here
// - Create a corresponding route handler in routes/index.js

app.controller('insertController', function($scope, $http)
{
    $scope.message = "";
    $scope.Insert = function()
    {
        var request = $http.get('/data/login/'+$scope.login+'/name/' + $scope.name +
            '/sex/' + $scope.sex + '/RelationshipStatus/' + $scope.RelationshipStatus +
            '/Birthyear/' + $scope.Birthyear);
        request.success(function(data)
        {
            $scope.data = data;
            console.log('insert returned data: ' + data);
        });
        request.error(function(data)
        {
            console.log('err');
        });
    }
});