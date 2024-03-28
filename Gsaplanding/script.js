//  ---timeline ---

var tl = gsap.timeline() 
tl.from( " #nav img ,  #nav h1 , #nav button "   , {
      y:-100,
      duration:1,
      delay:0.5,
      stagger:0.5,
      
} ) 

tl.from ( ".title h1  ", {
     y:200,

  opacity:0,
     stagger:0.3

})

tl.from (" #main  img", {
     scale:0,
     opacity:0,
})



//   ----for up and down scroll dowsn animation---
tl.from("#scroll" , {
    
    scale:0,
   opacity:0,
    
    
});

tl.to("#scroll" , {
     y:30,
     repeat:-1,
     duration:1,
     yoyo:true,
})