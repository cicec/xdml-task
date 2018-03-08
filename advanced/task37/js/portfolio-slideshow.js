{
    const view = document.querySelector('.swiper-container')
    const controller = {
        view: null,
        swiperOptions: {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        },
        init: function init() {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function bindEvents() {
            const mySwiper = new Swiper(this.view, this.swiperOptions)
        }
    }
    window.addEventListener('load', () => { controller.init() })
}