var tl = gsap.timeline();

tl.from('nav , nav h1 , nav button' , {
    y : -10,
    opacity:0,
    stagger:0.2,
})

tl.from('.main-part-1 h1',{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.9,
},"-=1")
tl.from('.main-part-1 p , .main-part-1 button',{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.2,
},"-=0.8")
tl.from('.main-part2 img',{
    // x:100,
    opacity:0,
    duration:2,
},"-=1.2")
tl.from('.section-1-bottom img',{
    y:100,
    opacity:0,
    duration:0.6,
    stagger:0.2
},"-=2.5")



var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        scrub:2,
        start:"top 100%",
        end:"top 5%",
    }
})


tl2.from(".services h1, .services p ",{
    y:150,
    opacity:0,
})
tl2.from(".left-1",{
    x:-200,
    opacity:0,
    duration:0.7
},"together-1")
tl2.from(".right-1",{
    x:200,
    opacity:0,
},"together-1")
tl2.from(".left-2",{
    x:-200,
    opacity:0,
},"together-2")
tl2.from(".right-2",{
    x:200,
    opacity:0,
},"together-2")



var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section-3",
        scroller:"body",
        scrub:2,
        start:"top 90%",
        end:"top 40%"
    }
})

tl3.from(".contact-us",{
    scale:0.5,
})


var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"footer",
        scroller:"body",
        scrub:3,
        markers:true,
        start:"top 100%",
        end:"top 75%"
    }
})

tl4.from(".heading h1, .heading p ",{
    y:550,
    opacity:0,
})
tl4.from(".bottom",{
        y:150,
})