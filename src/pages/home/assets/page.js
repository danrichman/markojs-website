new WOW().init();

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

$(document).ready(function() {
    window.lastScrollTop = $(window).scrollTop(), window.scrollDownStart = $(window).scrollTop(), $("body").keypress(function(t) {
        39 != t.which || $(document.activeElement).is("input") || $(".grid").toggle()
    }), $(".down-arrow").click(function() {
        var t = $(".website-guarantee").offset().top;
        $("html, body").animate({
            scrollTop: t
        })
    }), $(".hero-text .learn-more").click(function() {
        var t = $(".website-guarantee").offset().top;
        $("html, body").animate({
            scrollTop: t
        })
    }), $(".sign-up").click(function() {
        var t = $(".contact-form").offset().top;
        $("html, body").animate({
            scrollTop: t
        })
    });
    var t = function() {
            return $(window).width() < 640
        },
        e = function() {
            var t = $(".baseline-strut");
            t.each(function() {
                var t = $(this).offset().top;
                t % 6 ? $(this).height(6 - t % 6) : $(this).height(0)
            })
        },
        n = function() {
            var e = $("#navbar-container"),
                n = [];
            if (t()) {
                var i = $(window).scrollTop();
                n.push("mobile"), i > window.lastScrollTop && i > 0 ? (window.scrollDownStart || (window.scrollDownStart = i), i >= window.scrollDownStart + 100) : window.scrollDownStart = null, window.lastScrollTop = i
            }
            var o = e.find("nav.navbar"),
                r = o.offset().top + o.height(),
                s = $("[class*='update-navbar']").filter(function(t, e) {
                    return r >= $(e).offset().top - 2
                });
            if (s.length) {
                var a = s.last().attr("class").split(" ").filter(function(t) {
                    return "container-fluid" !== t && t.match(/^update-navbar/)
                });
                n.push.apply(n, a), window.c = n
            }
            e.attr("class", n.join(" "))
        };
    $(window).resize(function() {
        e(), n()
    }), $(window).scroll(function() {
        n(), setTimeout(function() {
            n()
        }, 1e3)
    }), e(), n()
});
