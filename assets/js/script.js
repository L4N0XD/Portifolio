const navLinks = document.querySelectorAll('.navbar-nav a');
const cards = document.getElementsByClassName('full-card');
const CardTitle = document.getElementsByClassName('card-title');
const backTop = document.querySelector(".back-to-top")



//Funcionamento do botão para voltar ao topo
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

//Define a disposicão das cartas
function cardDisposition(screen){
  if (screen == "mobile") {
    for (var d = 3; d <= 7; d++) {
      var div = $('.full-card-mobile-' + (d - 2));
      window['$div' + d] = div;
      console.log(div);
    }  
    for (var p = 5; p <= 13; p++) {
      var newProjDiv;
      if (p % 2 === 1) {
        if (p === 5) {
          newProjDiv = $('<div class="projects carousel-item active"></div>');
          window['$newDiv' + p] = newProjDiv;
          console.log(newProjDiv);
        } else {
          newProjDiv = $('<div class="projects carousel-item"></div>');
          window['$newDiv' + p] = newProjDiv;
          console.log(newProjDiv);
        }  
      }  
    }  
    for (var i = 6; i <= 14; i++) {
      var newDivIten;
      var num = Math.ceil((i - 4) / 2);
      if (i % 2 === 0) {
        newDivIten = $('<div class="itens" id="new-itens-' + num + '"></div>');  
        window['$newDiv' + i] = newDivIten;
        console.log(newDivIten);
      }  
    }  
    $div3.wrapAll($newDiv6);
    var $itens = $('#new-itens-1');
    $itens.wrapAll($newDiv5);
  
    $div4.wrapAll($newDiv8);
    var $itens2 = $('#new-itens-2');
    $itens2.wrapAll($newDiv7);
  
    $div5.wrapAll($newDiv10);
    var $itens3 = $('#new-itens-3');
    $itens3.wrapAll($newDiv9);
  
    $div6.wrapAll($newDiv12);
    var $itens4 = $('#new-itens-4');
    $itens4.wrapAll($newDiv11);
  
    $div7.wrapAll($newDiv14);
    var $itens5 = $('#new-itens-5');
    $itens5.wrapAll($newDiv13);

} else if (screen == "web"){  
  var elements = document.getElementsByClassName('controlRemove');

  for (var e = 0; e < 3; e++) {
    elements[0].parentNode.removeChild(elements[0]);
  }  
  for (var d = 1; d <= 2; d++) {
    var div = $('.full-card-web-' + d);
    window['$div' + d] = div;
  }  
  for (var p = 1; p <= 4; p++) {
    var newProjDiv;
    var newDivIten;
    if (p % 2 === 1) {
      if (p === 1) {
        newProjDiv = $('<div class="projects carousel-item active"></div>');
        window['$newDiv' + p] = newProjDiv;
      } else {
        newProjDiv = $('<div class="projects carousel-item"></div>');
        window['$newDiv' + p] = newProjDiv;
      }  
    } else if (p % 2 === 0){
      newDivIten = $('<div class="itens" id="new-itens-' + (p/2) + '"></div>');  
      window['$newDiv' + p] = newDivIten;
  }}    
    $div1.wrapAll($newDiv2)
    var $itens = $('#new-itens-1')
    $itens.wrapAll($newDiv1)

    $div2.wrapAll($newDiv4)
    var $itens2 = $('#new-itens-2')
    $itens2.wrapAll($newDiv3)
}};    

//Adiciona FadeInUp aos títulos das cartas
function titleEffect(){
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseover', function() {
      CardTitle[i].style.animation = 'fadeInUp .5s ease-out';
    });  
    
    cards[i].addEventListener('mouseout', function() {
      CardTitle[i].style.animation = 'none';
    });  
  }  
}
//Adiciona efeito ao rolar a página à partir dos links da navbar
function smoothEffect() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      if (
        this.getAttribute('href') !== "https://www.github.com/l4n0xd" &&
        this.getAttribute('href') !== "https://www.linkedin.com/in/taylan-noronha"
      ) {
        var section = document.querySelector(this.getAttribute('href'));
        var sectionTop = section.offsetTop;
        section.classList.add('active');
        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

  
if (window.innerWidth < 768 ) {
  cardDisposition("mobile");
}else if (window.innerWidth > 767){
  cardDisposition("web");
}  
titleEffect();

smoothEffect();

window.onscroll = function() {scrollFunction()};


