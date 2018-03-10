{
    //  设置导航项状态
    const view = document.querySelectorAll('[data-x]')
    const controller = {
        view: null,
        init: function init() {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function bindEvents() {
            window.addEventListener('scroll', () => {
                this.view.forEach((item) => {
                    const pageMiddleScrollY = window.scrollY + (document.documentElement.clientHeight * 0.5)
                    if (pageMiddleScrollY > item.offsetTop) {
                        const a = document.querySelector(`[href="#${item.id}"]`)
                        const navItems = document.querySelectorAll('.top-nav-bar>nav>ul>li>a')
                        navItems.forEach((navItem) => {
                            navItem.classList.remove('active')
                        })
                        a.classList.add('active')
                    }
                })
            })
        }
    }
    window.addEventListener('load', () => { controller.init() })
}