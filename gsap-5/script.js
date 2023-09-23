tl = gsap.timeline()

function load(){
    let a = 0;
    const interval = setInterval(function(){
        a++;
        if(a>99){
            clearInterval(interval)
        }
        document.querySelector("#loader h1").innerHTML = a+'%'
    },20)
}
tl.to('#loader h1',{
    scale:1.5,
    delay:0.5,
    duration:2,
    onStart:load()
})
tl.to("#loader",{
    top:'-100vh',
    delay:0.5,
    duration:1
})

gsap.to("#page1 h1",{
    transform :"translate(-100%, -25vh)",
    fontWeight:'100',
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        //markers:true,
        start:'top 0',
        end:'top -200%',
        scrub:2,
        pin:true
    }
})
// gsap.to("#page1 h1",{
//     transform :"translate(-100%, -35vh)",
//     fontWeight:'999',
//     scrollTrigger:{
//         trigger:"#page1",
//         scroller:"body",
//         //markers:true,
//         start:'top -100%',
//         end:'top -200%',
//         scrub:2,
//         pin:true
//     }
// })

const pag = document.getElementById('page1')
const crsr = document.getElementById('cursor')
pag.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x-60+'px'
    crsr.style.top = dets.y-60+'px'
    crsr.style.mixBlendMode = 'difference'
})
