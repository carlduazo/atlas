(function ($) {
       
    $(window).on("load resize",function(){
        var browserHeight = $(window).outerHeight();
        var browserWidth = $(window).width();
        var sectionPageHeight = browserHeight * 1;
        var sectionNavHeight = browserHeight;
        var listNavHeight = $(".list-basic-nav").outerHeight();
        var listNavLessHeight = sectionNavHeight - listNavHeight;
        var marginTopNav = listNavLessHeight/2;
        $(".section-page").css("height", sectionPageHeight).css("width", browserWidth);
        $(".section-footer").css("height", sectionPageHeight).css("width", browserWidth);
        $(".body-content").css("min-height", sectionPageHeight+"px").css("width", browserWidth);
        $(".section-navigation").css("height", sectionNavHeight+"px");
        $(".container-table-cell").css("height", sectionPageHeight+"px").css("width", browserWidth+"px");
        $(".my-avatar").css("height", sectionPageHeight+"px");
        $(".list-basic-nav").css("padding-top", marginTopNav);
       // alert(sectionNavOffset);
        $(".nav-link").click(function(){
            var sample =  $(this).attr("href");
            $('body').animate({
                scrollTop: $("#"+sample).offset().top
            }, 1000);
            return false;
        });
    });
    $('.chart').easyPieChart({
        easing: 'easeOutBounce',
        size: 120,
        lineWidth: 5,
        scaleColor: "#ffffff",
        barColor: "#8f0000",
        trackColor: "#e2e2e2",
        lineCap: "square",
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

   
}(jQuery));
