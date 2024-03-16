
// cursor animation
function cursorAnim(){
    var crs = document.querySelector("#cursor");
    var crsblur =  document.querySelector("#cursorblur");
 
    document.addEventListener("mousemove",function(dets){
        crs.style.left=dets.x + 33+"px"
        crs.style.top=dets.y+"px"
        crsblur.style.left=dets.x+"px"
        crsblur.style.top=dets.y+"px"
    })
    var allh4 =document.querySelectorAll("#nav h4");
    allh4.forEach(function(elem){
         elem.addEventListener("mouseenter",function(){
            crs.style.scale=3;
            crs.style.border="1px solid #fff";
            crs.style.backgroundColor="transparent"
    })

    })

    allh4.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
           crs.style.scale=1;
           crs.style.border="none";
           crs.style.backgroundColor="#95C11E"
   })

   })

}


// nav Animation
function navAnim(){
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
}

// body color Animation
function bodycolorAnim(){
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
}


// about text anim/img

function abouttext(){
    gsap.from("#about-us img, .text",{
        y:50,
        opacity:0,
        duration:0.9,
        stagger:0.9,
        scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            start:"top 60%",
            end:"top 50%",
            scrub:3
        }
    })
    gsap.from("#card-container .cards",{
        y:50,
        opacity:0,
        duration:0.9,
        stagger:0.9,
        scrollTrigger:{
            trigger:"#card-container",
            scroller:"body",
            start:"top 60%",
            // markers:true,
            end:"top 50%",
            scrub:2
        }
    })

    gsap.from("#col1",{
        x:-70,
        y:-70,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"body",
            start:"top 60%",
            end:"top 45%",
            markers:true,
            scrub:2
        }
    })
}





cursorAnim()
navAnim()
bodycolorAnim()
abouttext()


