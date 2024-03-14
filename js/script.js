
// cursor animation

var crs = document.querySelector("#cursor");
var crsblur =  document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets){
    crs.style.left=dets.x+"px"
    crs.style.top=dets.y+"px"
    crsblur.style.left=dets.x+"px"
    crsblur.style.top=dets.y+"px"
})

// nav Animation
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"140px",
    scrollTrigger:{
        scroller:"body",
        trigger:"#nav",
        scrub:3,
        start:"top -1%"
    }
})

// body color Animation

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"2%",
        end:"-100%",
        scrub:4
    }
})

