/**
 *  @desc A collection of helper functions which can be used in your tests
 */
(function (w) {
    'use strict';

    //  A quick way to define an empty dummy module
    w.dummyModule = function () {
        return function () {
            return {
                _construct: function () {},
                _destruct: function () {}
            };
        };
    };
    /*  Adding support for beforeAll and afterAll, because Jasmine doesn't
        support them by default
        beforeAll and afterAll will count as specs in the total spec count
        We'll accept this to happen for now
    */
    w.beforeAll = function (fn) {
        it(false, fn);
    };
    w.afterAll = function (fn) {
        it(false, fn);
    };
    // Cross-browser helper for triggering events on elements
    w.dispatchMouseEvent = function(target, var_args) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent.apply(e, Array.prototype.slice.call(arguments, 1));
        target.dispatchEvent(e);
    };
}(window));
