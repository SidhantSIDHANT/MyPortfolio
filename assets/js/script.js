
$(document).ready(function(){
    const $about = $("#aabout");
    // console.log(about)

    $about.on("click", ()=>{
        $("html,body").animate({scrollTop : $("#about").offset().top},1000)
    })

    // $home.on("click", ()=>{
    //     $("html,body").animate({
    //         scrollTop : $("#home").offset().top
    //     },2000)
    //   })
})