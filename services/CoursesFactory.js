courseRoster.factory('CoursesFactory', function CoursesFactory() {
<<<<<<< HEAD
  var factory = {};
  factory.courses = [ {name: 'Intro to AngularJS', id: 1, students: []}];

  factory.addCourse = function() {
    factory.courses.push({
      name: factory.courseName,
      id: factory.courses.length + 1,
      students: []
    });
    factory.courseName = null;
  };

  return factory;
=======
    var factory = {};
    factory.courses = [];
    factory.addCourse = function() {
        factory.courses.push({ name: factory.courseName, id: factory.courses.length +1, students: [] });
        factory.courseName = null;
    };
    return factory;
>>>>>>> 01808d0891da1715ed848bdf96ec86f82ee8022d
});
