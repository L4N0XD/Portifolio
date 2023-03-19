const navLinks = document.querySelectorAll('.navbar-nav a');
const cards = document.getElementsByClassName('full-card');
const CardTitle = document.getElementsByClassName('card-title');




function cardDisposition(screen){
  if (screen == "mobile"){
    var $div3 = $('.full-card-mobile-1');
    var $div4 = $('.full-card-mobile-2');
    var $div5 = $('.full-card-mobile-3');
    var $div6 = $('.full-card-mobile-4');
    var $div7 = $('.full-card-mobile-5');

    var $newDiv5 = $('<div class="projects carousel-item active"></div>');
    var $newDiv6 = $('<div class="itens" id="new-itens-1"></div>');
    var $newDiv7 = $('<div class="projects carousel-item"></div>');
    var $newDiv8 = $('<div class="itens" id="new-itens-2"></div>');
    var $newDiv9 = $('<div class="projects carousel-item"></div>');
    var $newDiv10 = $('<div class="itens" id="new-itens-3"></div>');
    var $newDiv11 = $('<div class="projects carousel-item"></div>');
    var $newDiv12 = $('<div class="itens" id="new-itens-4"></div>');
    var $newDiv13 = $('<div class="projects carousel-item"></div>');
    var $newDiv14 = $('<div class="itens" id="new-itens-5"></div>');
    $div3.wrapAll($newDiv6)
    var $itens = $('#new-itens-1')
    $itens.wrapAll($newDiv5)

    $div4.wrapAll($newDiv8)
    var $itens2 = $('#new-itens-2')
    $itens2.wrapAll($newDiv7)

    $div5.wrapAll($newDiv10)
    var $itens3 = $('#new-itens-3')
    $itens3.wrapAll($newDiv9)

    $div6.wrapAll($newDiv12)
    var $itens4 = $('#new-itens-4')
    $itens4.wrapAll($newDiv11)

    $div7.wrapAll($newDiv14)
    var $itens5 = $('#new-itens-5')
    $itens5.wrapAll($newDiv13)
} else if (screen == "web"){
  var elements = document.getElementsByClassName('controlRemove');

  for (var i = 0; i < 3; i++) {
    elements[0].parentNode.removeChild(elements[0]);
}
    var $div1 = $('.full-card-web-1');
    var $div2 = $('.full-card-web-2');
    var $newDiv1 = $('<div class="projects carousel-item active"></div>');
    var $newDiv2 = $('<div class="itens" id="new-itens-1"></div>');
    var $newDiv3 = $('<div class="projects carousel-item "></div>');
    var $newDiv4 = $('<div class="itens" id="new-itens-2"></div>');

    $div1.wrapAll($newDiv2)
    var $itens = $('#new-itens-1')
    $itens.wrapAll($newDiv1)

    $div2.wrapAll($newDiv4)
    var $itens2 = $('#new-itens-2')
    $itens2.wrapAll($newDiv3)
}};




for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function() {
    CardTitle[i].style.animation = 'fadeInUp .5s ease-out';
  });
  
  cards[i].addEventListener('mouseout', function() {
    CardTitle[i].style.animation = 'none';
  });
}

if (window.innerWidth < 768 ) {
  cardDisposition("mobile")


  }else if (window.innerWidth > 767){
  cardDisposition("web")


}



navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 
    var section = document.querySelector(this.getAttribute('href')); 
    var sectionTop = section.offsetTop; 
    section.classList.add('active');
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth' 
    });
  });
});  

window.onscroll = function() {scrollFunction()};

const backTop = document.querySelector(".back-to-top")
		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("back-to-top").style.opacity = 1;
        backTop.classList.add('show')
			} else {
				document.getElementById("back-to-top").style.opacity = 0;
			}
		}

		function topFunction() {
			window.scrollTo({
        top: "#home",
        behavior: 'smooth'
        
      });
      
		}
		backTop.addEventListener("click", function() {
      topFunction();
		});