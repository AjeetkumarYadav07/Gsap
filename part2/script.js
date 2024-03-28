gsap.from(" #page1 #box ", {
    scale:0,
    delay:1,
    duration:1,
    rotate:360
});

gsap.from("#page2 #box" , {
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger: "#page2 #box", 
        scroller: "body" ,
    }
})
gsap.from("#page3 #box" , {
    scale:0,
    delay:1,
    duration:1,
    rotate:360,
    scrollTrigger:{
        trigger: "#page3 #box", 
        scroller: "body" ,
    }
})