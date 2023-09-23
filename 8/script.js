const tl = gsap.timeline({
    repeat:-1,
})

tl.to(".container",{
    width:"100%",
    duration:2,
    stagger:2,
    
},0)

tl.to("#text h1",{
    y:-100,
    duration:2,
    stagger:2,
},0)
tl.to("#text h1",{
    delay:2,
    opacity:0,
    duration:2,
    stagger:2
},0)