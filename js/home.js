$(document).ready(function (){
    // -------------------------------------------------Home Page JS

    // Get in touch button
    $(".get-in-touch").hover(
    function() {
    $(".get-in-touch").addClass( "hover" );
    }, function(){
    $(".get-in-touch").removeClass( "hover" );
    }
    );
    
    // Home page center text

    $("#uxd").hover(
    function() {
    $("#uxd").addClass("hover-uxd");
    }, function(){
    $("#uxd").removeClass("hover-uxd");
    }
    );

    // Current job text

    $("#current-job").hover(
    function() {
    $("#current-job").addClass("hover-uxd");
    }, function(){
    $("#current-job").removeClass("hover-uxd");
    }
    );

    // Youtube section text

    $("#youtube-text").hover(
    function() {
    $("#youtube-text").addClass("hover-youtube");
    }, function(){
    $("#youtube-text").removeClass("hover-youtube");
    }
    );

    // Get in touch button
    $(".get-in-touch").hover(
    function() {
    $(".get-in-touch").addClass( "hover-yt" );
    }, function(){
    $(".get-in-touch").removeClass( "hover-yt" );
    }
    );
    
});