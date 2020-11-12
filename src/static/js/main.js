$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,  
    center: true,
    margin:30,
    autoplay:true,
    autoplayTimeout:50000000,
    autoplayHoverPause:true,
    responsive:{
        600:{
            items:2,
        }
    },
  });

  
  //form
  const form = document.querySelector(".contact_form");
  const filds = [form.name, form.mail, form.message];
  filds.forEach((item)=>{
    item.addEventListener('change', ()=>{
      item.value != '' ? item.parentElement.classList.add('active') : item.parentElement.classList.remove('active')
    })
  });
});