


/* File Created: April 28, 2014 Corsini Alessio*/

$(document).ready(function () {
    "use strict";
    /*
    *  Simple image gallery. Uses default settings
    */

    $('.fancybox').fancybox();

    // Remove padding, set opening and closing animations, close if clicked and disable overlay
    $(".fancybox-effects-d").fancybox({
        padding: 0,

        openEffect: 'elastic',
        openSpeed: 150,

        closeEffect: 'elastic',
        closeSpeed: 150,

        closeClick: true,
        arrows: true,
        showArrows: true,
        helpers: {
            overlay: null
        }
    });

});

$(function () { cbpFixedScrollLayout.init(); });
$(window).load(function () {
    "use strict";
    $(".modal").delay(5000).fadeOut(1000);
});
$('nav > a').click(function () {
    $('nav > a').removeClass("cbp-fbcurrent");
    $(this).addClass("cbp-fbcurrent");
});

$('.tablet-close').click(function (e) {
    $('.menu').toggleClass('no-collapse').toggleClass('collapse'); e.preventDefault();
});

/**** the jScrollPane script ****/

(function ($) {
    "use strict";
    $(window).load(function () {
        $("#content_1").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        $(".inner-noslit").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        $(".models-scroll").mCustomScrollbar({
            scrollButtons: {
                enable: true
            },
            theme: "dark"
        });
        //ajax demo fn
        $("a[rel='load-content']").click(function (e) {
            e.preventDefault();
            var $this = $(this),
						url = $this.attr("href");
            $this.addClass("loading");
            $.get(url, function (data) {
                $this.removeClass("loading");
                $("#content_1 .mCSB_container").html(data); //load new content inside .mCSB_container
                $("#content_1").mCustomScrollbar("update"); //update scrollbar according to newly loaded content
                $("#content_1").mCustomScrollbar("scrollTo", "top", { scrollInertia: 200 }); //scroll to top
            });
        });
        $("a[rel='append-content']").click(function (e) {
            e.preventDefault();
            var $this = $(this),
						url = $this.attr("href");
            $this.addClass("loading");
            $.get(url, function (data) {
                $this.removeClass("loading");
                $("#content_1 .mCSB_container").append(data); //append new content inside .mCSB_container
                $("#content_1").mCustomScrollbar("update"); //update scrollbar according to newly appended content
                $("#content_1").mCustomScrollbar("scrollTo", "h2:last", { scrollInertia: 2500, scrollEasing: "easeInOutQuad" }); //scroll to appended content
            });
        });
    });
})(jQuery);