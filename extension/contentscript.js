// https://stackoverflow.com/a/23456845
var actualCode =  '(' + function() {
    'use strict';
    var navigator = window.navigator;
    var modifiedNavigator;
    if ('userAgent' in Navigator.prototype) {
        // Chrome 43+ moved all properties from navigator to the prototype,
        // so we have to modify the prototype instead of navigator.
        modifiedNavigator = Navigator.prototype;

    } else {
        // Chrome 42- defined the property on navigator.
        modifiedNavigator = Object.create(navigator);
        Object.defineProperty(window, 'navigator', {
            value: modifiedNavigator,
            configurable: false,
            enumerable: false,
            writable: false
        });
    }
    // Pretend to be Windows XP
    Object.defineProperties(modifiedNavigator, {
        userAgent: {
            value: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
            configurable: false,
            enumerable: true,
            writable: false
        },
        appVersion: {
            value: navigator.appVersion.replace(/\([^)]+\)/, 'Windows NT 10.0.0'),
            configurable: false,
            enumerable: true,
            writable: false
        },
        platform: {
            value: 'Win64',
            configurable: false,
            enumerable: true,
            writable: false
        },
    });
} + ')();';

var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
