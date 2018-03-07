{
    //  鼠标悬浮子级菜单
    const view = document.querySelectorAll('.top-nav-bar>nav>ul>li')
    const controller = {
        view: null,
        init: function init() {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function bindEvents() {
            this.view.forEach((item) => {
                item.addEventListener('mouseover', () => {
                    item.classList.add('hover')
                })
                item.addEventListener('mouseleave', () => {
                    item.classList.remove('hover')
                })
            })
        }
    }
    controller.init()
}