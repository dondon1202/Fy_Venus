/**
* Template Name: PhotoFolio - v1.0.0
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});


// $(document).ready(function() {
//   $("button.select-head, button.select-face, button.select-body, button.select-foot, button.select-space").hide();
// });


$(document).ready(function() {
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
});

// 預約課程選單控制
$(".dropdown-menu.select-items li a").click(function(){
  
  $(".select-items.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 頭部選單控制
$(".dropdown-menu.select-head li a").click(function(){
  
  $(".select-head.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 臉部選單控制
$(".dropdown-menu.select-face li a").click(function(){
  
  $(".select-face.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 身體選單控制
$(".dropdown-menu.select-body li a").click(function(){
  
  $(".select-body.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 腳底選單控制
$(".dropdown-menu.select-foot li a").click(function(){
  
  $(".select-foot.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 儀器選單控制
$(".dropdown-menu.select-space li a").click(function(){
  
  $(".select-space.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});


// 商品選單控制
$(".dropdown-menu.select-product li a").click(function(){
  
  $(".select-product.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 服務據點控制
$(".dropdown-menu.select-location li a").click(function(){
  
  $(".select-location.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 技師選單控制
$(".dropdown-menu.select-master li a").click(function(){
  
  $(".select-master.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});

// 技師選單控制
$(".dropdown-menu.select-time li a").click(function(){
  
  $(".select-time.btn:first-child").html($(this).text()+' <span class="caret"></span>');
  
});




// 連動式選單控制
// 當我選取A 所有選單隱藏 然後A SHOW
$(".dropdown-menu.select-items li a.select-all").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  
});

$(".dropdown-menu.select-items li a.select-1").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  $("div.form-group.select-head").show();
  
});

$(".dropdown-menu.select-items li a.select-2").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  $("div.form-group.select-face").show();
  
});

$(".dropdown-menu.select-items li a.select-3").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  $("div.form-group.select-body").show();
  
});

$(".dropdown-menu.select-items li a.select-4").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  $("div.form-group.select-foot").show();
  
});

$(".dropdown-menu.select-items li a.select-5").click(function(){
  
  $("div.form-group.col-md-6.select, div.form-group.col-md-6.select-face, div.form-group.col-md-6.select-body, div.form-group.col-md-6.select-foot, div.form-group.col-md-6.select-space,div.form-group.col-md-6.select-head").hide();
  $("div.form-group.select-space").show();
  
});


// 日曆
$(function(){
  $('#datepicker').datepicker();
});