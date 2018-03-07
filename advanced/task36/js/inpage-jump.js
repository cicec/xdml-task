{
    //  导航页内跳转
    const view = document.querySelectorAll('.top-nav-bar>nav>ul>li>a')
    const controller = {
        view: null,
        init: function init() {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function bindEvents() {
            this.view.forEach((item) => {
                item.onclick = (event) => {
                    event.preventDefault()
                    const href = event.currentTarget.getAttribute('href')
                    const element = document.querySelector(href)
                    const startTop = window.scrollY
                    const endTop = element.offsetTop - 100

                    function animate(time) {
                        requestAnimationFrame(animate)
                        TWEEN.update(time)
                    }
                    requestAnimationFrame(animate)

                    const coords = { y: startTop }
                    new TWEEN.Tween(coords)
                        .to({ y: endTop }, 500)
                        .easing(TWEEN.Easing.Cubic.InOut)
                        .onUpdate(() => {
                            window.scrollTo(0, coords.y)
                        })
                        .start()
                }
            })
        }
    }
    controller.init()
}