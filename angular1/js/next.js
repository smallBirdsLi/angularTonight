// 创建模块
var myModule=angular.module('second',[])
// 创建控制器
myModule.controller('jiexialai',['$scope',function($scope){
	$scope.person={
		name:'lizhiquan',
		age:23
	}
	$scope.sex='boy'
}])














// 	funtcion($scope){
// 	$scope.name='lizhiquan';
// 	$scope.person={
// 		age:200,
// 		sex:'boy'
// 	}
// })