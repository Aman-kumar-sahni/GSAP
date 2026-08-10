gsap.to(".page2 h1",{
    transform:"translateX(-220%)",
            duration:4,
        delay:1,

    scrollTrigger:{
        trigger:".page2 h1",
        markers:"true",
        start:"top 30%",

        
    }
})