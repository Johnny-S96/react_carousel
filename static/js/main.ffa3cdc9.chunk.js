(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=n(2),s=n(3),u=n(5),m=n(4),l=(n(13),n(14),n(1)),f=n.n(l),p=(f.a.arrayOf(l.string).isRequired,f.a.number.isRequired,f.a.number.isRequired,f.a.number.isRequired,f.a.number.isRequired,f.a.bool.isRequired,function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={currentListPosition:0},e}return Object(s.a)(n,[{key:"scrollRight",value:function(e,t,n){var a=-t+e;this.setState((function(t){var i=t.currentListPosition;return n&&i===a?{currentListPosition:0}:i-e<a?{currentListPosition:a}:{currentListPosition:i-e}}))}},{key:"scrollLeft",value:function(e,t,n){var a=-t+e;this.setState((function(t){var i=t.currentListPosition;return n&&0===i?{currentListPosition:a}:i+e>=0?{currentListPosition:0}:{currentListPosition:i+e}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.images,a=t.step,r=t.frameSize,c=t.itemWidth,o=t.animationDuration,s=t.infinite,u=this.state.currentListPosition,m=c*n.length,l={width:"".concat(m,"px"),transitionDuration:"".concat(o,"ms"),transform:"translateX(".concat(u,"px)")},f={width:"".concat(c,"px"),height:"".concat(c,"px")},p={width:"".concat(r*c,"px")},b=c*a;return i.a.createElement("div",{className:"Carousel"},i.a.createElement("button",{type:"button",className:"Carousel__button",onClick:function(){e.scrollLeft(b,m,s)}},"\u276e"),i.a.createElement("div",{style:p,className:"container"},i.a.createElement("ul",{style:l,className:"Carousel__list"},n.map((function(e){return i.a.createElement("li",{key:Math.random()},i.a.createElement("img",{style:f,src:e,alt:"emoji"}))})))),i.a.createElement("button",{type:"button",className:"Carousel__button",onClick:function(){e.scrollRight(b,m,s)}},"\u276f"))}}]),n}(i.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e}return Object(s.a)(n,[{key:"increaseFrameSize",value:function(e){this.setState((function(t){var n=t.frameSize;return n===e?{frameSize:n}:{frameSize:n+1}}))}},{key:"decreaseFrameSize",value:function(){this.setState((function(e){var t=e.frameSize;return 1===t?{frameSize:t}:{frameSize:t-1}}))}},{key:"increaseImgSize",value:function(e){this.setState((function(t){var n=t.itemWidth;return n>300?{itemWidth:n}:{itemWidth:n+e}}))}},{key:"decreaseImgSize",value:function(e){this.setState((function(t){var n=t.itemWidth;return n<11?{itemWidth:n}:{itemWidth:n-e}}))}},{key:"increaseStepSize",value:function(e){this.setState((function(t){var n=t.step;return n===e?{step:n}:{step:n+1}}))}},{key:"decreaseStepSize",value:function(){this.setState((function(e){var t=e.step;return 1===t?{step:t}:{step:t-1}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.images,a=t.step,r=t.frameSize,c=t.itemWidth,o=t.animationDuration,s=t.infinite;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with images"),i.a.createElement(p,{images:n,step:a,frameSize:r,itemWidth:c,animationDuration:o,infinite:s}),i.a.createElement("form",{action:"#",className:"form"},i.a.createElement("h2",null,"Increase frame size:"),i.a.createElement("div",{className:"form__increase-size-container"},i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){e.decreaseFrameSize()}},"-1"),i.a.createElement("p",null,r),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){e.increaseFrameSize(n.length)}},"+1")),i.a.createElement("h2",null,"Increase image size:"),i.a.createElement("div",{className:"form__increase-size-container"},i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){return e.decreaseImgSize(10)}},"-10px"),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){return e.decreaseImgSize(1)}},"-1px"),i.a.createElement("p",null,"".concat(c,"px")),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){return e.increaseImgSize(1)}},"+1px"),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){return e.increaseImgSize(10)}},"+10px")),i.a.createElement("h2",null,"Number of images scrolled per click:"),i.a.createElement("div",{className:"form__increase-size-container"},i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){e.decreaseStepSize()}},"-1"),i.a.createElement("p",null,a),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){e.increaseStepSize(n.length)}},"+1")),i.a.createElement("button",{type:"button",className:"form__button",onClick:function(){e.setState({infinite:!s})}},"Infinite:"," ",s?"on":"off")))}}]),n}(i.a.Component);c.a.render(i.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(17)}},[[8,1,2]]]);
//# sourceMappingURL=main.ffa3cdc9.chunk.js.map