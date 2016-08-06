var scrollAnimation = function (params) {
    var options = {
        element: params.element,                                // animated DOM element
        direction: params.direction,                            // hide block or not if scrolling to top
        appearanceField: params.appearanceField || 4,           // part of screen for appearance animated blocks
        identicalAnimation: params.identicalAnimation,          // is the animation the same or not
        animation: params.animation || 'fade-out'               // type of animation
    };

    var showClass = 'show';
    var animatedClass = 'scroll__animation__' + options.animation;
    var blocks = document.querySelectorAll(options.element);
    var vh = window.innerHeight;

    window.onresize = function () {
        vh = window.innerHeight;
    };

    if(options.identicalAnimation == undefined){
        for(var i = 0; i < blocks.length; i++){
            blocks[i].classList.add(animatedClass);
        }
    }

    if(options.direction && options.direction){
        window.onscroll = function () {
            for(var i = 0; i < blocks.length; i++){
                var self = blocks[i];
                if(self.getBoundingClientRect().top - vh < - vh/options.appearanceField){
                    self.classList.add(showClass);
                }
            }
        };
    }
    else{
        window.onscroll = function () {
            for(var i = 0; i < blocks.length; i++){
                var self = blocks[i];
                if(self.getBoundingClientRect().top - vh < - vh/options.appearanceField){
                    self.classList.add(showClass);
                }
                else{
                    self.classList.remove(showClass);
                }
            }
        };
    }
};