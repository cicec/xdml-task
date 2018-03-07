{
    //  顶部导航栏响应滚动样式
    const view = document.getElementById('topNavBar')
    const controller = {
        view: null,
        init: function init() {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function bindEvents() {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 0) {
                    this.view.classList.add('scolling')
                } else {
                    this.view.classList.remove('scolling')
                }
            })
        }
    }
    window.addEventListener('load', () => { controller.init() })
}