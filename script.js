jQuery(document).ready(function(){
    jQuery(".tab").click(function(){
	tabUrl = jQuery(this).attr("href");
	jQuery(".tab").parent().removeClass("active");
	jQuery(this).parent().addClass("active");
	return false;
    });
});
