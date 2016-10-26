/**
* main.js file for the client
*/

var client = (function(){

    function init(){
        inclStyles();
    }

    // include stylesheets
    function inclStyles(){
        var link = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/bootstrap.min.css';
        appendHead(link);
    }

    function buildScaffold(){
        // TODO: lalala
    }

    function appendHead(child){
        document.getElementsByTagName('head')[0].appendChild(child);
    }

    return {
        init : init
    }
})();

client.init();


function $(selector){
    this.selector = selector;
}

$.prototype.ajax(data){
    return "ajax" + data;
}

var x = (function(){

})();

$.ajax({ "lalal" , "lalala"});

$("hey").add("was geht");



Ahmed.hallo({
    on: function(){

    },
    off: function(){
        
    }
})
