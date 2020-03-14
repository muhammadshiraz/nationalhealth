$(document).ready(function() {
    //Nav anchor active class function
    $("header nav .navbar-nav a").click(function () {
        $("header nav .navbar-nav a").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");   
    });

    //Append filter box function
    $(".plus_btn").click(function() {
        var clone_filter = $(this).closest('.filter_section').clone(true);
        $(this).closest('.filter_section').after(clone_filter);
    });
    
    //Add deactivate and fa-eye-slash function
    $(".eyeview_btn span").click(function() {  
        $(this).children(".fa-eye").toggleClass("fa-eye-slash");
        $(this).parent('.eyeview_btn').toggleClass("deactivate");
    });  
});// DOM function endyz