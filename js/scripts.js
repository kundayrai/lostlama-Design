$(document).ready(function(){
var scroll_start = 0;
var startchange = $('#navbar');
var offset = startchange.offset();
if (startchange.length){
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
        $(".fixed").addClass("colored-nav");
        } 
        else {
        $('.fixed').removeClass("colored-nav");
    }
    });
}
});
