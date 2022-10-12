// 반응형 구현을 위한 계산값
var convertPx = {
  vw: function (px) {
    px = parseFloat(px);
    var ww = $(window).width();

    return ww * px / 1920;
  }
}

$(window).on('scroll', function() {
  let documentHeight = $(document).scrollTop();
  console.log(documentHeight)
  if(documentHeight >= convertPx.vw(0) && documentHeight < convertPx.vw(200)) {
    $('.content_1 .content_container').css({'opacity': 1});
    $('.video-dim').css({'opacity': 0.3});
  }
  if(documentHeight >= convertPx.vw(200) && documentHeight < convertPx.vw(400)) {
    $('.content_1 .content_container').css({'opacity': 0.8});
    $('.video-dim').css({'opacity': 0.4});
  }
  if(documentHeight >= convertPx.vw(400) && documentHeight < convertPx.vw(600)) {
    $('.content_1 .content_container').css({'opacity': 0.4});
    $('.video-dim').css({'opacity': 0.5});
  }
  if(documentHeight >= convertPx.vw(600) && documentHeight < convertPx.vw(800)) {
    $('.content_1 .content_container').css({'opacity': 0.2});
    $('.video-dim').css({'opacity': 0.6});
  }
  if(documentHeight >= convertPx.vw(800)) {
    $('.content_1 .content_container').css({'opacity': 0});
    $('.video-dim').css({'opacity': 0.7});
  }
  if(documentHeight >= convertPx.vw(3000) && documentHeight < convertPx.vw(3840)) {
    $('.content_4 .up').css({'animation-name': 'up'});
  }
  if(documentHeight >= convertPx.vw(3840) && documentHeight < convertPx.vw(5020)) {
    $('.content_5 li:nth-child(1) .up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(2) .up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(2) .up').css({'animation-delay': '0.3s'});
    $('.content_5 li:nth-child(3) .up').css({'animation-name': 'up'});
    $('.content_5 li:nth-child(3) .up').css({'animation-delay': '0.5s'});
  }
  if(documentHeight >= convertPx.vw(5020) && documentHeight < convertPx.vw(7000)) {
    $('.content_6 li:nth-child(1).up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(2).up').css({'animation-name': 'up'});
    $('.content_6 li:nth-child(2).up').css({'animation-delay': '0.3s'});
  }
})

$('.top').on('click', function(){
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
})