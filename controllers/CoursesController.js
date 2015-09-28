courseRoster.controller('CoursesCtrl', function CoursesCtrl($scope, CoursesFactory) {
  $scope.courses = CoursesFactory.courses;
  $scope.CoursesFactory = CoursesFactory;
  $scope.ctrlCourseName = 'Intro to Awesome';

  $scope.alert = function(message) {
    alert(message);
  }
});
