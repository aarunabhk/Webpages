const tl = gsap.timeline()

tl.from("#img1",{
    x: -400,
    delay:0.8,
    duration:1.5,
    opacity:0
},0.0)
tl.from("#img2",{
    x: 400,
    duration:1.5,
    delay:0.8,
    opacity:0
},0)

tl.from("#img3",{
    y: 400,
    duration:1.5,
    delay:0.8,
    opacity:0
},0)
tl.from("#center",{
    opacity:0,
    scale:1.5,
    duration:1,
    delay:0.4
})