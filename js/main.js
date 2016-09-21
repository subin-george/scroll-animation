// Bug Fixed when scroll
function Scrolldown() {
     window.scroll(0,1); 
}

window.onload = Scrolldown;

// Parallax
   $(document).ready(function() {
        var controller = $.superscrollorama();

controller.addTween(
          '#parallax-canvas',
          (new TimelineLite())
            .append([
              TweenMax.fromTo($('#b1'), 1, 
                {css:{top: 20}, immediateRender:true}, 
                {css:{top: 400}}),
              TweenMax.fromTo($('#b2'), 1, 
                {css:{top: 20}, immediateRender:true}, 
                {css:{top: 500}}),
              TweenMax.fromTo($('#b3'), 1, 
                {css:{top: 250}, immediateRender:true}, 
                {css:{top: 700}}),                        
            ]),
          2000
        );
  });
