jQuery(document).ready(function(){
    $("#tabs").tabs({
            beforeLoad: function(event, ui) {
                $('#preloader').show();
            },
            load: function(event, ui) {
                $("#preloader").hide();
            }
    }).addClass( "ui-tabs-vertical ui-helper-clearfix" );
$("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
});
