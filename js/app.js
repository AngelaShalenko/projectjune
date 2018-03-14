$(document).ready(function() {

 $("#bio").hide();  
 //hides bio content upon page loading

$("button").click(function(){
    $("#bio").toggle();
});
//toggles bio content show/hide when button is clicked.


// $('a').click(function(){
//     $(this).addClass('visited');
// });


// $("a").click(function(){
//     $("a.coral").removeClass(".coral")
//     $(this).addClass(".coral");
// });

//I tried several ways to get my nav anchor elements to stay a coral color when on that page.  Below is my final answer. :) 

$(function(){
        $('a').each(function(){
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('active'); 
            }
        });
    });
});