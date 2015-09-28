courseRoster.directive("hometext", function() {
    return {
        template: "Back to the beginning"
    }
});


courseRoster.directive("changeClass", function() {
    return function (scope, element, attrs) {
        element.bind("click", function() {
            element.toggleClass(attrs.changeClass);
        });
    }
});


courseRoster.directive('sampleCourse', function() {
    return {
        scope: {
            courseName: '='
        },
        template: '<div ng-model="courseName"> {{ courseName }} </div>'
    }
});


courseRoster.directive('alertUser', function() {
    return {
        scope: {
            alert: "&"
        },
        template: '<input type="text" ng-model="value">' +
            '<button ng-click="alert({message:value})">alert</button>'
    }
});
