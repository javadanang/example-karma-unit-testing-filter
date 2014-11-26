var app = angular.module('myApp', []);

app.filter('myFilter', function() {
    return function(value, number) {
        if (angular.isString(value)) {
            number = angular.isNumber(number) ? number : value.length;
            if (number < 0) return value;
            if (number >= value.length) return value.toUpperCase();
            var sub = value.substr(0, number);
            return sub.toUpperCase() + value.substr(number);
        } else {
            return value;
        }
    };
});
