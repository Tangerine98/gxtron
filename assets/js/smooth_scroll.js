function noScroll(pos) {
    console.log(pos);
    window.scrollTo(0, pos);
}
  
// add listener to disable scroll
window.addEventListener('scroll', noScroll(0));

$(document).ready(function(){
    var pos = $("a[href^='#']").click(function(e) {
        window.removeEventListener('scroll', noScroll);
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;
        console.log(position);

        $("body, html").animate({
            scrollTop: position
        } /* speed */ );
        setTimeout(function(){ window.addEventListener('scroll', noScroll(position)); }, 2000);
        return position;
    });
    window.addEventListener('scroll',noScroll(pos));
  });