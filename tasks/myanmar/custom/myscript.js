var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {  
  document.getElementById("spinner").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
$(document).ready(function(){
    $('.navbar a').click(function(){              
            $('body,html').animate({
                scrollTop:$('#'+$(this).data('value')).offset().top-100
            },1000)     
                $('.navbar a').attr('class','nav-link');
                $(this).attr('class','nav-link active');     
                $('#navbar-brand').attr('class','navbar-brand');
                $('#navbarDropdown').attr('class','nav-link dropdown-toggle');
                $('.dropdown-menu a').attr('class','dropdown-item');         
               $('#register-fix').attr('class','text-white');
    });    
})