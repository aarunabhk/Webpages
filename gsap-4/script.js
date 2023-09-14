let tl = gsap.timeline()
tl.from("#nav div",{
    y:-80,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3
})
tl.from('#left h1',{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4
})
tl.from('#right img',{
    scale:0.5,
    opacity:0,
    rotate:45,
    duration:1
})