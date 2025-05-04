function homepageAnimaiton(){
    gsap.set(".slidesm", {scale:5})

var tl = gsap.timeline({
     scrollTrigger:{
     trigger:".home",
     scrub:1,
     start:"top top",
     end:"bottom top",
    },
})

tl.to(".video" ,{
    '--clip':"3%",
    ease:Power2, 
},'a')

.to(".slidesm" ,{
    scale:1.5,
    ease:Power2
    
},'a')

.to(".lft" ,{
    xPercent:-10,
    ease:Power4,
    stagger:.1
},'b')

.to(".rgt" ,{
    xPercent:10,
    ease:Power4,
    stagger:.1
},'b')


// document.querySelectorAll(".hero__rows img").forEach(e => console.log(e))
}

function realAnimaton(){
    gsap.to(".realslide", {
    scrollTrigger:{
        trigger:".real",
        start:"top top",
        end:"bottom bottom ",
        markers:true,
        scrub:1,
        

    },
    xPercent:-300,
    ease:Power4
})
}

function bodycolorchange(){
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 0%",
        end:"bottom 50%",
        onEnter:function(){
            document.body.setAttribute("theme" , e.dataset.color)
        },
        onEnterBack:function(){
            document.body.setAttribute("theme" , e.dataset.color)
        },


    })
})

}
function teamAnimation(){
    document.querySelectorAll(".teammember")
.forEach(function(el){
    el.addEventListener("mousemove" , function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:1,
            x: gsap.utils.mapRange(0 , window.innerWidth , -200 , 200 ,dets.clientX),
            ease:Power4
        })
    })


    el.addEventListener("mouseleave" , function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            ease:Power4
        })
    })

})
}
bodycolorchange()
homepageAnimaiton();
realAnimaton();
teamAnimation();



(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
