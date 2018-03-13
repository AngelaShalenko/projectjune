$(document).ready(function() {

 $("#bio").hide();  
 //hides bio content upon page loading

$("button").click(function(){
    $("#bio").toggle();
});
//toggles bio content show/hide when button is clicked.


$("a").click(function(){
    // $("a.coral").removeClass(".coral")
    // $(this).addClass(".coral");
       $(this).addClass("visited");
});


});