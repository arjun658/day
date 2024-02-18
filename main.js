wow.prototype.addBox = function(element) {
    this.boxes.push(element);
};

var wow = new WOW();
wow.init();

$('.wow').on('scrollSpy:exit', function() {
    $(this).css({
        'visibility': 'hidden',
        'animation-name': 'none'
    }).removeClass('animated');
    wow.addBox(this);
}).scrollSpy();


$(window).scroll(function(){
  if ($(window).scrollTop() >= 50) 
  {
    $('.navbar').addClass('fixed');
  }
  else 
  {
    $('.navbar').removeClass('fixed');
  }
});

$(".navbar .navbar-nav li a").click(function(e){
  $(this).parent().addClass('active').siblings().removeClass('active');
  var offset = $($(this).attr('href')).offset().top - 100; 
$('html, body').animate({scrollTop:offset}, 500); 
   e.preventDefault();
});

$(document).ready(function(){
  setTimeout(function(){
    $('.cards-coins-abs .cards-coins-abs-img').addClass('cards-coins-abs-img-animation');
  }, 0);
});    

$(document).ready(function(){
  setInterval(function(){ 
    $('.cards-coins-abs .cards-coins-abs-img').toggleClass('cards-coins-abs-img-anim');  
    setTimeout(function(){
      $('.cards-coins-abs .cards-coins-abs-img').toggleClass('cards-coins-abs-img-anim');  
    },1500);

  },3000);
}); 

$(document).ready(function(){
  setTimeout(function(){
    $('.poker-coins_bitcoins .poker-coins_bitcoins-image').addClass('poker-coins_bitcoins-image-animation');
  }, 0);
});    

$(document).ready(function(){
  setInterval(function(){ 
    $('.poker-coins_bitcoins .poker-coins_bitcoins-image').toggleClass('poker-coins_bitcoins-image-anim');  
    setTimeout(function(){
      $('.poker-coins_bitcoins .poker-coins_bitcoins-image').toggleClass('poker-coins_bitcoins-image-anim');  
    },1000);

  },2000);
});  