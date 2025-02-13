var BLUE_CANVAS_SETUP={connectorUrl:"https://course-evals.utoronto.ca/BlueConnectorInstance1/",canvasAPI:"https://q.utoronto.ca",domainName:"com.explorance",consumerID:"4ka4tx4nLdejNUrQDGL9zA==",defaultLanguage:"en-us"},BlueCanvasJS=document.createElement("script");BlueCanvasJS.setAttribute("type","text/javascript");BlueCanvasJS.setAttribute("src","https://course-evals.utoronto.ca/BlueConnectorInstance1//Scripts/Canvas/BlueCanvas.min.js");document.getElementsByTagName("head")[0].appendChild(BlueCanvasJS);

$(document).ready(function() {
    $('.ic-app-footer__logo-link').attr('href', function(i) {
        return 'https://www.utoronto.ca';
    })
});

//Google Tag Manager code added by Marco on Feb 6, 2023
<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHG8JGD');
<!-- End Google Tag Manager -->

var googleTagManager = '<!-- Google Tag Manager (noscript) -->' +
    '<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHG8JGD" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>' +
    '<!-- End Google Tag Manager (noscript) -->';
$('body').prepend(googleTagManager);


//Canvas Google Analytics - taken from https://community.canvaslms.com/docs/DOC-9211-how-to-set-up-google-analytics-for-canvas
//Minified working as of Aug 28, 2019 - Source https://raw.githubusercontent.com/japerks/canvas_scripts/master/updated_google_analytics_cache_minified.js
function removeStorage(e) {
    try {
        localStorage.removeItem(e), localStorage.removeItem(e + "_expiresIn")
    } catch (t) {
        return console.log("removeStorage: Error removing key [" + e + "] from localStorage: " + JSON.stringify(t)), !1
    }
    return !0
}
 
function getStorage(e) {
    var t = Date.now(),
        o = localStorage.getItem(e + "_expiresIn");
    if (null == o && (o = 0), o < t) return removeStorage(e), null;
    try {
        return localStorage.getItem(e)
    } catch (t) {
        return console.log("getStorage: Error reading key [" + e + "] from localStorage: " + JSON.stringify(t)), null
    }
}
 
function setStorage(e, t, o) {
    o = null == o ? 86400 : Math.abs(o);
    var s = Date.now() + 1e3 * o;
    try {
        localStorage.setItem(e, t), localStorage.setItem(e + "_expiresIn", s)
    } catch (t) {
        return console.log("setStorage: Error setting key [" + e + "] in localStorage: " + JSON.stringify(t)), !1
    }
    return !0
}
async function coursesRequest(e) {
    let t = await fetch("/api/v1/users/self/courses?per_page=100"),
        o = await t.text();
    o = o.substr(9), o = JSON.parse(o);
    var s = JSON.stringify(o);
    return setStorage("ga_enrollments", s, null), parseCourses(e, s)
}
 
function parseCourses(e, t) {
    if (null != t) {
        let s = JSON.parse(t);
        for (var o = 0; o < s.length; o++)
            if (s[o].id == e) return s[o]
    }
    return null
}
 
function gaCourseDimensions(e) {
    custom_ga("set", "dimension4", e.id), custom_ga("set", "dimension5", e.name), custom_ga("set", "dimension6", e.account_id), custom_ga("set", "dimension7", e.enrollment_term_id), custom_ga("set", "dimension8", e.enrollments[0].type), custom_ga('set', 'anonymizeIp', true), custom_ga("send", "pageview")
}
 
function googleAnalyticsCode(e) {
    var t, o, s, n;
    if (custom_ga("create", e, "auto"), t = ENV.current_user_id, o = ENV.current_user_roles, custom_ga("set", "userId", t), custom_ga("set", "dimension1", t), custom_ga("set", "dimension3", o), n = window.location.pathname.match(/\/courses\/(\d+)/)) {
        n = n[1], s = 0;
        try {
            let e = getStorage("ga_enrollments");
            if (null != e) {
                var r = parseCourses(n, e);
                null === r ? coursesRequest(n).then(e => {
                    null === e ? (custom_ga("set", "dimension4", n), custom_ga('set', 'anonymizeIp', true), custom_ga("send", "pageview")) : gaCourseDimensions(e)
                }) : gaCourseDimensions(r)
            } else coursesRequest(n).then(e => {
                null === e ? (custom_ga("set", "dimension4", n), custom_ga('set', 'anonymizeIp', true), custom_ga("send", "pageview")) : gaCourseDimensions(e)
            })
        } catch (e) {
            if ((s += 1) > 5) return custom_ga("set", "dimension4", n), custom_ga('set', 'anonymizeIp', true), void custom_ga("send", "pageview")
        }
    } else {
      custom_ga('set', 'anonymizeIp', true);
      custom_ga("send", "pageview")
    }
}! function(e, t, o, s, n, r, a) {
    e.GoogleAnalyticsObject = n, e[n] = e[n] || function() {
        (e[n].q = e[n].q || []).push(arguments)
    }, e[n].l = 1 * new Date, r = t.createElement(o), a = t.getElementsByTagName(o)[0], r.async = 1, r.src = "https://www.google-analytics.com/analytics.js", a.parentNode.insertBefore(r, a)
}(window, document, "script", 0, "custom_ga");
 
googleAnalyticsCode("UA-156444856-2");