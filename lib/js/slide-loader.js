(function() { 
  'use strict';
  function loadSlideConfig(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'slides.json', false);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") callback(xobj.responseText);
    };
    xobj.send();  
  }

  function loadSlide(filename, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("text/html");
    xobj.open('GET', 'slides/' +  filename, false);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") callback(xobj.responseText);
    };
    xobj.send();  
  }

  function insertSlide(html) {
    document.write(html);
  }

  loadSlideConfig(function(responseText) {
    var slides = JSON.parse(responseText).include;
    slides.forEach(function(src) {
      loadSlide(src, insertSlide);
    });
  });
})();