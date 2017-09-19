$("document").ready(function() {
  $("p.sub-blogs").hide();  
  $(".read-less").hide();
  $(".read-more").click(readMore);
  $(".read-less").click(readLess);
  $(window).scroll(parallaxScroll);

  function readMore(){
        $(this).parent().parent().find("p.sub-blogs").slideDown(function(){
        $(this).parent().parent().find(".read-less").show();
        $(this).parent().parent().find(".read-more").hide();
      });
 
  }
  
  
  function readLess(){
      $(this).parent().parent().find("p.sub-blogs").slideUp(function(){
        $(this).parent().parent().find(".read-more").show();
        $(this).parent().parent().find(".read-less").hide();
      });
   
  }

  $(".menu").click(function(){
      $("nav").toggleClass("open");
  });
  
  function parallaxScroll(){
    s = $("body").scrollTop();
    $("header").css("background-position", "center " + (s/3) + "px");

  }

});