// var all=angular.module('all',['first','second','service'])
//创建模块
var myModule=angular.module('first',['second','service'])
myModule.controller('first-one',['$scope',function($scope){
	$scope.person={
		name:'li',
		age:10
	}
}])

var myModule1=angular.module('second',[])
myModule1.controller('second-one',function($scope){
	$scope.person1={
		name1:'zhi',
		age1:20 
	}
})

