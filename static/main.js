define(function (require, exports, module) {
    'use strict';
    var changeTxt = require('changeText');
    var $ = require('jquery');    //默认Jquery库不能被模块化调用，需要重新封装

    var showTxt = function () {
        $('#title').html(changeTxt.init());
    }

    exports.showTxt = showTxt;
});