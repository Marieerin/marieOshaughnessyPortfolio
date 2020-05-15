// $(window).scroll(() => {
//     const positionOnYAxis = ($(window).scrollTop());

//     if (positionOnYAxis > 900) {

//         $('.section').css("box-shadow","purple")
//     }
// })


//     $(document).on("scroll", function () {
//         const section = $('.section')
//         const pageHeight = $(window).pageHeight
//         section.toggleClass(".focused")
//         var pageTop = $(document).scrollTop()
//         var pageBottom = pageTop + $(window).height()
//         const tag = $('.section')
//         for (var i = 0; i < tags.length; i++) {
//             var tag = tags[i]

//             if ($(tag).position().top < pageBottom) {
//                 $(tag).addClass("focused")
//             } else {
//                 $(tag).removeClass("focused")
//             }
//         }
//     })






$(document).ready(function () {
    $('#hamburger').prop('checked', false)

    $("#arrowDown").on('click', () => {
        $('html').animate({
            scrollTop: $('main').offset().top
        }, 1000)
    })

   const scrollToSection = (e) => {
        const sectionSelected = e.target.className
        $('html').animate({
            scrollTop: $(`#${sectionSelected}`).offset().top
        }, 990)
    }

    $(".secondaryNav").on('click', "li", (res)=> {
        scrollToSection(res)
    })

    $("nav").on('click', "li", (e) => {
        scrollToSection(e)
    })

    $(".hamburgerWrapper").on("click", () => {
        if($('#hamburger').is(':checked')){
        console.log('hi');
            $('.mainNav').css("left", "0")
        } else {
            $('.mainNav').css("left", "-100%")
        }
    })

    $(".mainNav").on('click', () => {
        $('.mainNav').css("left", "-100%")
        $('#hamburger').prop('checked', false);
    })
});