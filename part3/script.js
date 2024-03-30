gsap.to("#page1 h1 " , {
    transform:"translateX(-70%)",
    fontWeight: 100,

    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0",
        scrub:3,
        pin:true,
        end:"top -200%"

    }
})


var tl = gsap.timeline()

// function time() {
//     var a = 0;

//      setInterval(function() {
//        
//              a = a + Math.floor (Math.random()*10)
        //   if (a<100) {
//             document.querySelector("#timer").
//             innerHTML = a +"%"
//         } else {
//            a =100
//            document.querySelector("#timer ").
//            innerHTML = a+ "%"
//         }
//     }, 100);
// }

// time();


function time () {

   var a = 0;
     setInterval (function () {
        if (a<100) {
              a++
               document.querySelector("#timer").
               innerHTML = a+ "%"
        } else {
            a = 100
            document.querySelector("#timer").
            innerHTML = a+"%"
        }
     }, 20)

}


tl.to("#loader h1 ", {
     delay:0.5,
     duration:1,
     onStart:time()
})

tl.to("#loader " , {
    top:" -100vh",
    delay:1,
    duration:2.5
})



  document.addEventListener("click" , neFuntion);

   function neFuntion () {
    document.querySelector("#letter ").innerHTML = "Cute girl"
   }