  $(document).ready(function(){
  $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:['',''],
        dots:false,
        responsive:{
            0:{
                nav:false,
                items:1
            },
            600:{
                nav:false,
                items:2
            },
            1000:{
                nav:false,
                items:3
            },
            1100:{
                nav:true,
                items:3
            },
            1200:{
                nav:true,
                items:4
            }
        }
  });
}); 
    //sidebar
    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
//    if($(window).width() > 1156) {
        $("#mainMenu").fadeIn('slow');
//} 
        $("header .icons").fadeIn('slow');
    });
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        
//    $("#mainMenu").fadeOut('slow');
        $("header .icons").fadeOut('slow');
    });
    
    //map-slider
    $(".map-button").click(function() {
    if($( ".map-button" ).hasClass("active")){
            $(".map-button").removeClass("active"); 
//            $(".map-mobile").css("display","none");
            
        }else{
//            $(".map-mobile").css("display","block");
            
            $(".map-button").addClass("active");
        }
        $(".map-mobile").slideToggle( "slow" );
    });
    
    
    
    
    //tabs 
    
    $('.tabs-case .menu__link').click(function () {
    idClick = $(this).attr('id');
    $('.tabs-case .menu__link').removeClass("active");
    $(this).addClass("active");
    $('.pc-section .hidden-block').fadeOut(10);
    $('.pc-section #'+idClick+'-hidden-block').fadeIn(800);
    return false;
});
//anchor
$(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
 
 
});

//tooltips
$(function(){
    // инициализации подсказок для всех элементов на странице, имеющих атрибут data-toggle="tooltip"
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });    
});

   //tabs click top menu
//    
    $('.technology-atservice .section-linking .list__link').click(function () {
        
    idClick = $(this).attr('id');
    
    var idMenu =  idClick.replace('-menu','');
//    console.log(idMenu);
    
    $('.technology-atservice .section-linking .list__link').removeClass("active");
    $(this).addClass("active");
    $('.technology-atservice .section-bodyservice').fadeOut(10);
    $('.technology-atservice #'+idMenu+'-section-bodyservice').fadeIn(800);
    $('.technology-atservice .rounded-menu .list__item').removeClass("active");
    $('.technology-atservice #'+idMenu).addClass("active");
    return false;
});

   //tabs click toptable-round bg
    
    $('.technology-atservice .rounded-menu .list__item').click(function () {
      
    idClick = $(this).attr('id');
    
//    var idMenu =  idClick.replace('-menu','');
//    console.log(idMenu);
    $('.technology-atservice .section-linking .list__link').removeClass("active");
    $('.technology-atservice .rounded-menu .list__item').removeClass("active");
    $(this).addClass("active");
    $('.technology-atservice .section-bodyservice').fadeOut(10);
    $('.technology-atservice #'+idClick+'-section-bodyservice').fadeIn(800);    
    $('.technology-atservice #'+idClick+'-menu').addClass("active");
    return false;
});
//click toptable-muenu

 $('.technology-page .boost .table .table__link ').click(function () {
        
   idClick = $(this).attr('id');
    console.log(idTopMenu);
    console.log(idClick);
   var idTopMenu =  idClick.replace('-menutop','');
    console.log(idTopMenu);
  
    $('.technology-atservice .section-linking .list__link').removeClass("active");
    $('.technology-atservice .section-linking .list__link').removeClass("active");
    $(this).addClass("active");
    $('.technology-atservice .section-bodyservice').fadeOut(10);
    $('.technology-atservice #'+idTopMenu+'-section-bodyservice').fadeIn(800);
    $('.technology-atservice .rounded-menu .list__item').removeClass("active");
    $('.technology-atservice #'+idTopMenu).addClass("active");
    $('.technology-atservice #'+idTopMenu+'-menu').addClass("active");
  return false;
});


$(document).ready(function() {
    
    $('#videoModal').on('hide.bs.modal', function (e) {
      $(".video-modal")[0].pause();
    });
    $('#videoModal2').on('hide.bs.modal', function (e) {
      $(".video-modal")[0].pause();
    });

});