$(function() {

    //ページの読み込みが完了後にMVの高さを調整
    $(window).on("load", function () {
        var windowHeight = $(window).height();
        $(".p-main-visual").height(windowHeight);
    });
    
    //画面リサイズ時にMVの高さを調整
    $(window).resize(function () {
        var windowHeight = $(window).height();
        $(".p-main-visual").height(windowHeight);
    });

    //ヘッダー　スクロールでの変化
    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {
            $(".l-header").addClass("is-active");
        } else {
            $(".l-header").removeClass("is-active");
        }
    });
    
    // ページ内スムーススクロール
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        const target = $(href == '#' || href == '' ? 'html' : href);
        const position = target.offset().top;
        const speed = 400;
        $('body, html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });

    //swiper初期化
    const swiper = new Swiper('.swiper', {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // ページトップへ戻る
    const $pagetop = $('.c-page-top');

    $(window).on('scroll', function(){
    if($(this).scrollTop() < 400) {
        $pagetop.fadeOut();
    } else {
        $pagetop.fadeIn();
    }
    });
    $pagetop.on('click', function() {
    $('body, html').animate({
        scrollTop: 0
    }, 400);
        return false;
    });

    // ハンバーガーメニュー
    $gnavBtn = $('.js-button-menu');
    $gnav = $('.p-global-nav');

    $gnavBtn.on('click', function() {
        $gnavBtn.toggleClass('active');
        $gnav.toggleClass('is-show');
    });



});