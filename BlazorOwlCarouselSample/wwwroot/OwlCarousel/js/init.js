export function initOwl(owlId, option) {


    const owlOption = {
        center: option.center,
        items: option.items,
        loop: option.loop,
        marging: option.marging,
        autoWidth: option.autoWidth,
        rtl: option.rtl,
        autoplay: option.autoplay,
        autoplayTimeout: option.autoplayTimeout,
        autoplayHoverPause: option.autoplayHoverPause,
        autoHeight: option.autoHeight,
        dots: option.dots,
        navText: ['<i class="bi bi-arrow-right-circle-fill"></i>', '<i class="bi bi-arrow-left-circle-fill"></i>'],
        responsive: {}
    };

    if (option.responsive.length > 0) {

        option.responsive.forEach(breakpoint => {
            owlOption.responsive[breakpoint.viewSize] = {
                items: breakpoint.items,
                marging: breakpoint.marging,
                nav: breakpoint.nav,
                loop: breakpoint.loop,
                center: breakpoint.center,
            };
        });

    }

    $(`#${owlId}`).owlCarousel(owlOption);

}