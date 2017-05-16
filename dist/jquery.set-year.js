(function($) {

$.fn.setYear = function() {
  return this.each(function() {
    var today = new Date();
    $(this).text(today.getFullYear());
  });
};

})(jQuery);
