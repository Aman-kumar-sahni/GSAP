// // // gsap.to("#box1",{
// // //     x:1000,
// // //     duration:2,
// // //     delay:1,
// // //     backgroundColor:"yellow",
// // //     borderRadius:"50%",
// // //     rotate:360
// // // })
// // // gsap.from("#box2",{
// // //     x:1000,
// // //     duration:2,
// // //     delay:1,
// // //     backgroundColor:"yellow",
// // //     borderRadius:"50%",
// // //     rotate:360
// // // })


// // let t1 = gsap.timeline()

// // t1.from("#main h1",{
// //     duration:0.6,
// //     delay:0.3,
// //     y:-40,
// // })

// // t1.from("#mid h4",{
// //     duration:0.8,
// //     delay:0.2,
// //     y:-40,
// //     stagger:0.4
// // })
// // t1.from ("#main h2",{
// //     duration:0.6,
// //     delay:0.1,
// //     y:-40
    
// // })

gsap.to(".box",{
    scale:0,
    delay:2,
    rotate:360,duration:2,
    scrollTrigger:{
        trigger:".box",
        markers:true,
        scrub:true,
        pin:true
    }
})
gsap.from(".page3 h1",{
    opacity:0,
    duration:2,
    delay:1,
x:-500,
scrollTrigger:{
    trigger:".page3 h3",
    scrub:true,
    
}

})
gsap.from(".page3 h3",{
    opacity:0,
    duration:0.4,delay:2,x:500,
    scrollTrigger:{
   trigger: ".page3 h3",markers :true,
start:"bottom 90%"}
})