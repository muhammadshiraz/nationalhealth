$(document).ready(function() {
    //Nav anchor active class function
    $("header nav .navbar-nav a").click(function () {
        $("header nav .navbar-nav a").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });
  
});// DOM function end