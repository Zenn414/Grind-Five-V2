window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Slider
let index=0;
    const slider=document.querySelector('.container-img')
    const next=document.querySelector('.next');
    next.addEventListener('click', ()=>{
          if(index<1){
        index++;
        slider.style.transform = `translateX(-${index * 55}vw)`;
        slider.style.transtion
        next.disabled=true;
    }
});

    const prev=document.querySelector('.prev');
    prev.addEventListener('click',()=>{
         if(index>0){
            index--;
            slider.style.transform=`translateX(-${index*55}vw)`;
              prev.disabled=true;
         }
    })
   

// TEMPLATE SLIDER ULASAN
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed:600,

  // If we need pagination
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


