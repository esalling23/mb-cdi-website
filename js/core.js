var partials = ['eng_long', 'styles', 'nav', 'favicon'];


$(function() {
  console.log("loaded the core js file");

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69497779-1', 'auto');
  ga('send', 'pageview');

  var converter = new showdown.Converter();

  // Front page down arrow hide on scroll
  $(window).scroll(function (event) {

      var scroll = $(window).scrollTop();

      if (scroll > 60) {
        if ($('#downArrow').css('display') != 'none')
          $('#downArrow').fadeOut(150);
      } else {
        if($('#downArrow').css('display') == 'none')
          $('#downArrow').fadeIn(150);
      }
  });

  Handlebars.registerHelper('htmlUrl', function(str) {
    return str + '.html';
  });

  Handlebars.registerHelper('html', function(str) {
    var html = converter.makeHtml(str);
    return html;
  });

  Handlebars.registerHelper('decode', function(str) {
    console.log(str);
    console.log(encodeURI(str));
    console.log()
    return decodeURI(str);
  });

  Handlebars.registerHelper('jsonPrint', function(str) {

    return JSON.stringify(str);
  });

  Handlebars.registerHelper('ifeq', function(a, b, options) {
    console.log(a, b);
    if (a == b) {
      console.log("same");
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
  });
  
});
