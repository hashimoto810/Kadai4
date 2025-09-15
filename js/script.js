
//スティッキーヘッダー
$(function(){
    var $win = $(window),
        $fv = $('.fv'),//first view
        $header = $('.header'),
        fvHeight = $fv.outerHeight();
        fixedClass = 'fixed';

        $win.on('load scroll',function(){
            var value = $(this).scrollTop();
            if($win.width() > 768){
                if( value > fvHeight){
                    $header.addClass(fixedClass);
                }else{
                    $header.removeClass(fixedClass);
                }
            }
        });
});

//スライダー
 $('.slider').slick({

  });