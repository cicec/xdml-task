function main() {
    //  Loading画面
    loading.classList.remove('loading')

    //  顶部导航栏滚动样式
    window.onscroll = () => {
        if (window.scrollY > 0) {
            topNavBar.classList.add('scolling')
        } else {
            topNavBar.classList.remove('scolling')
        }
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
            const tween = new TWEEN.Tween(coords)
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
            item.classList.add('active')
        }
        item.onmouseleave = () => {
            item.classList.remove('active')
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