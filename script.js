$(document).ready(function () {
    // makes sure hamburger menu is not checked on refresh or reopen
    $('#hamburger').prop('checked', false)

    // scrolls down to about me section
    $("#arrowDown").on('click', () => {
        $('html').animate({
            scrollTop: $('main').offset().top
        }, 1000)
    })

    // function for crolling to the selected section
    const scrollToSection = (e) => {
        const sectionSelected = e.target.className
        $('html').animate({
            scrollTop: $(`#${sectionSelected}`).offset().top
        }, 1000)
    }

    $(".secondaryNav").on('click', "li", (res)=> {
        scrollToSection(res)
    })

    $("nav").on('click', "li", (e) => {
        scrollToSection(e)
    })

    // haburger menu functionality
    // on click hamburger will appear
    $(".hamburgerWrapper").on("click", () => {
        if($('#hamburger').is(':checked')){
            $('.mainNav').css("left", "0")
        } else {
            $('.mainNav').css("left", "-100%")
        }
    })

    // when anything in the menu is clicked the hamburger menu will dissapear
    $(".mainNav").on('click', () => {
        $('.mainNav').css("left", "-100%")
        $('#hamburger').prop('checked', false);
    })
});