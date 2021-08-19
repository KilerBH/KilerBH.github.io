$(document).ready(function(){
    
/*$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
     $(".about").each((i, el) => {
         
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if($(el).hasClass("active")){
                   $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
     })
});*/

 let options = {threshold: [0.5]};/*about*/
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.about');
    elements.each((i, el) =>{
        observer.observe(el);
    });
    
});

function onEntry(entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation')
        }
    });
}/*about*/


/*плавный скролл с отступом*/
$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 40 + "px"});
})

/*анимация чисел СТАТИСТИКА*/
$(document).ready(function () {
 
    var show = true;
    var countbox = ".stat";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.stat h4').css('opacity', '1');
            $('.stat h4').spincrement({
                thousandSeparator: "",
                duration: 3000
            });
             
            show = false;
        }
    });
 
});





/*Popup 

$(".clear-cookie").on("click", function() {
  Cookies.remove('colorboxShown');
  $(this).replaceWith("<p><em>Cookie cleared. Re-run demo</em></p>");
});

$(".order-cheezburger").on("click", function() {
  $.colorbox.close();
});

function onPopupOpen() {
  $("#modal-content").show();
  $("#yurEmail").focus();
}

function onPopupClose() {
  $("#modal-content").hide();
  Cookies.set('colorboxShown', 'yes', {
    expires: 1
  });
  $(".clear-cookie").fadeIn();
  lastFocus.focus();
}

function displayPopup() {
  $.colorbox({
    inline: true,
    href: "#modal-content",
    className: "cta",
    width: 600,
    height: 350,
    onComplete: onPopupOpen,
    onClosed: onPopupClose
  });
}


  setTimeout(function() {
    lastFocus = document.activeElement;
    displayPopup();
  }, 30000);*/






	


                                                
        










