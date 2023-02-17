$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

window.onscroll = function() {
    growShrinkLogo() , scrollNav()
 };

 function growShrinkLogo() {
 
    var scroll = document.getElementById("myp")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
        myp.style.display='block' 
        myp.style.transition = '0.3s';
        } else {
        myp.style.display='none';
        myp.style.transition = '0.3s';
        }
        
            var scroll = document.getElementById("special_active")
            if (document.body.scrollTop >1 || document.documentElement.scrollTop > 1 ) {
            scroll.style.color = "white"
            scroll.style.borderBottomColor = "white"
            }else{
                scroll.style.color = "#ffc511"
                scroll.style.borderBottomColor = "#ffc511"
            }
            
            
        
}

 $(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > 1) {
                $(".navv").addClass('stick_tab_1');
            } else {
                $(".navv").removeClass('stick_tab_1');
            }
        })
    })


// scroll js
var timeOut;
function scrollToTop() {
if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
window.scrollBy(0,-50);
timeOut=setTimeout('scrollToTop()',10);
}
else clearTimeout(timeOut);
}

// ========================== Side Nav 
// Designed and Developed By Akshyansh Sharma

function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.backgroundColor = "white";
    
}