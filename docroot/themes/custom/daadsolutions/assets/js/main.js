/**
 * @file
 * Behaviors for the daadsolution theme.
 */
(function ($) {
  $(document).ready(function () {
    var languageSwitcher = $('.dropbutton-wrapper .dropbutton-action');
    languageSwitcher.on('click',function (){
      if($('.dropbutton-wrapper').hasClass('open')){
        $('.dropbutton-wrapper').removeClass('open')

      }else{
        $('.dropbutton-wrapper').addClass('open')

      }
    })
  })
})(jQuery);
