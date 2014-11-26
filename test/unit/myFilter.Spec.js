describe('myFilter Unit Testing', function (){
    
    var filterInstance;
    beforeEach(angular.mock.module("myApp"));
    
    beforeEach(angular.mock.inject(function ($filter) {
        filterInstance = $filter("myFilter");
    }));
    
    it("Uppercase full length of string", function () {
        var result = filterInstance("testing filter");
        expect(result).toEqual("TESTING FILTER");
    });
    
    it("Uppercase first five characters of string", function () {
        var result = filterInstance("testing filter", 5);
        expect(result).toEqual("TESTIng filter");
    });
});
