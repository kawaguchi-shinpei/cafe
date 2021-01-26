jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

// クリックスクロール
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });



//   メニュー
$(function(){
    const btn = document.querySelector('.btn-menu');
    const nav = document.querySelector('nav');
     
    btn.addEventListener('click', () => {
      nav.classList.toggle('open-menu')
    });
});


// nav
$(function(){
$('.nav-btn').on('click',function(){
    if( $(this).hasClass('active') ){
     // if条件１があったときの処理
     // hasClassは、クリックしたときにactive要素があるかどうか調べている。
     $(this).removeClass('active');
     // removeClassは、クリックしたときにactive要素を消す働きがある。
     $('.header-nav').addClass('close').removeClass('open');
     // addClassは、クリックしたときに要素を追加できる。
   }
     else {
       // 条件がなかった場合の処理
     $(this).addClass('active');
     $('.header-nav').addClass('open').removeClass('close');
   }
 });
});
