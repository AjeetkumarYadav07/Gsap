gsap.to("#page1 h1 " , {
    transform:"translateX(-70%)",
    fontWeight: 100,

    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        scrub:3,
        pin:true,
        end:"top -200%"

    }
})