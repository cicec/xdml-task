{
    //  元素入场
    const view = document.querySelectorAll('[data-x]')
    const controller = {
        view: null,
        init: function init() {
            this.view = view
            this.readyEnter()
            this.bindEvents()
        },
        readyEnter: function readyEnter() {
            this.view.forEach((item) => { item.classList.add('ready-enter') })
        },
        enterElement: function enterElement(element) {
            element.classList.remove('ready-enter')
            element.classList.add('enter')
            if (element.id === 'skill') {
                const inners = document.querySelectorAll('.skill .inner')
                setTimeout(() => {
                    inners.forEach((inner) => { inner.classList.add('active') })
                }, 600)
            }
        },
        bindEvents: function bindEvents() {
            this.enterElement(view[0])
            window.addEventListener('scroll', () => {
                this.view.forEach((item) => {
                    const elementEnterScrollY = window.scrollY + (document.documentElement.clientHeight * 0.6)
                    if (elementEnterScrollY > item.offsetTop) this.enterElement(item)
                })
            })
        }
    }
    controller.init()
}