// Avoid `console` errors in browsers that lack a console.
(function() {
    "use strict";

    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;


    if (!window.console) {
        try {
            window.console = {};
        } catch(e) {}
    }

    while (length--) {
        method = methods[length];

        try {
            // Only stub undefined methods.
            if (!window.console[method]) {
                console[method] = noop;
            }
        } catch(e) {}
    }
}());

//IE Fix
(function() {
    "use strict";

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode(
                "@-ms-viewport{width:auto!important}"
            )
        );
        document.getElementsByTagName("head")[0].
            appendChild(msViewportStyle);
    }
}());


function isModernBrowser() {
    "use strict";

    return ('querySelector' in document &&
        'localStorage' in window &&
        'addEventListener' in window);
}
function isTouchDevice(){
    "use strict";

    return ('ontouchstart' in window ||
        window.DocumentTouch !== undefined && document instanceof DocumentTouch);
}
