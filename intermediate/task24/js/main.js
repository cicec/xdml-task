function main() {
    //  Loading画面
    loading.classList.remove('loading')

    //  顶部导航栏响应滚动样式
    const navBarOnScroll = () => {
        if (window.scrollY > 0) {
            topNavBar.classList.add('scolling')
        } else {
            topNavBar.classList.remove('scolling')
        }
    }

    //  获取页面中主要元素
    const mainElements = document.querySelectorAll('[data-x]')
    mainElements.forEach((item) => { item.classList.add('ready-enter') })

    //  元素入场
    const enterElement = () => {
        mainElements.forEach((item) => {
            const elementEnterScrollY = window.scrollY + (document.documentElement.clientHeight * 0.6)
            if (elementEnterScrollY > item.offsetTop) {
                item.classList.remove('ready-enter')
                item.classList.add('enter')
            }
        })
    }

    //  设置导航项状态
    const setNavItemsState = () => {
        mainElements.forEach((item) => {
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
    }

    enterElement()
    window.onscroll = () => {
        enterElement()
        setNavItemsState()
        navBarOnScroll()
    }

    //  导航页内跳转
    const navItems = document.querySelectorAll('.top-nav-bar>nav>ul>li>a')
    navItems.forEach((item) => {
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

    //  鼠标悬浮子级菜单
    const navList = document.querySelectorAll('.top-nav-bar>nav>ul>li')
    navList.forEach((item) => {
        item.onmouseover = () => {
            item.classList.add('hover')
        }
        item.onmouseleave = () => {
            item.classList.remove('hover')
        }
    })

    //  作品集切换
    portfolioState1.onclick = () => {
        portfolioBar.className = 'bar state1'
    }
    portfolioState2.onclick = () => {
        portfolioBar.className = 'bar state2'
    }
    portfolioState3.onclick = () => {
        portfolioBar.className = 'bar state3'
    }
}

window.onload = main