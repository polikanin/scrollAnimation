var scrollAnimation = function (params) {
    var options = {
        element: params.element,                                // animated DOM element
        direction: params.direction,                            // hide block or not if scrolling to top
        appearanceField: params.appearanceField || 4,           // part of screen for appearance animated elements
        animation: params.animation || 'fade-out',              // type of animation
        animateCss: params.animateCss                           // if need to use AnimateCss
    };

    var showClass = 'show';
    var animatedClass = 'scroll__animation__' + options.animation;  // class of animated elements
    var elements = options.animateCss ? document.querySelectorAll('.animated') : document.querySelectorAll(options.element);
    var vh = window.innerHeight;
    var position = [];  // array for collecting elements position

    var getElementsPosition = function(counter){
        return elements[counter].getBoundingClientRect().top + window.pageYOffset;   //get elements position from top
    };

    var forward = function(){
        var start = window.pageYOffset + vh - (vh/options.appearanceField);
        for(var i = 0; i < elements.length; i++){
            var self = elements[i];
            if(position[i] < start){
                if(options.animateCss){
                    self.classList.add(newClass[i]);
                }
                else{
                    self.classList.add(showClass);
                }
            }
        }
    };

    var reverse = function(){
        var start = window.pageYOffset + vh - (vh/options.appearanceField);
        for(var i = 0; i < elements.length; i++){
            var self = elements[i];
            if(position[i] < start){
                if(options.animateCss){
                    self.classList.add(newClass[i]);
                }
                else{
                    self.classList.add(showClass);
                }
            }
            else{
                if(options.animateCss){
                    self.classList.remove(newClass[i]);
                }
                else{
                    self.classList.remove(showClass);
                }
            }
        }
    };

    for(var i = 0; i < elements.length; i++){
        position[i] = getElementsPosition(i);
    }

    if(options.animateCss){
        var reg = /scroll-[a-zA-z]*/;
        var newClass = [];
        for(var i = 0; i < elements.length; i++){
            var classNameList = elements[i].className;
            var className = classNameList.match(reg);
            newClass[i] = className[0].substring(7);
            elements[i].classList.remove(className);
        }
    }
    else{
        for(var i = 0; i < elements.length; i++){
            elements[i].classList.add(animatedClass);
        }
    }

    window.onresize = function () {
        vh = window.innerHeight;
        for(var i = 0; i < elements.length; i++){
            if(options.animateCss){
                position[i] = getElementsPosition(i);
            }
            else{
                elements[i].classList.remove(animatedClass);
                position[i] = getElementsPosition(i);
                elements[i].classList.add(animatedClass);
            }
        }
    };

    if(options.direction){
        window.onscroll = forward;
    }
    else{
        window.onscroll = reverse
    }
};