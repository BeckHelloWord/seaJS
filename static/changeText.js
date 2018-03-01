define(function (require, exports, module) {
    'use strict';

    var init = function () {
        
        var textContent = [
            'yes it works',
            'seajs demo',
            'it is a luck day',
            'wish this help you',
            'thank you for reading'
        ]

        var index = Math.floor(Math.random() * textContent.length);
        return textContent[index];
    }

    module.exports = {
        init: init
    }
});