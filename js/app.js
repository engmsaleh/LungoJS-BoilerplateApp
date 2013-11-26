var App = (function(lng, undefined) {

    sectionTrigger = function(event) {
        event.stopPropagation();
        /* setTimeout(function() {
            lng.Notification.success("Event: " + event.type, "Layout events manager", "info", 2);
        }, 500); */
    };

    articleTrigger = function(event) {
        event.stopPropagation();
        console.error(event);
    };

    return {
        sectionTrigger: sectionTrigger,
        articleTrigger: articleTrigger
    };

})(Lungo);

Lungo.Events.init({
 
 	'load section#listExample'     : App.sectionTrigger,
 	'unload section#listExample'   : App.sectionTrigger
 
});

Lungo.ready(function() {



});
