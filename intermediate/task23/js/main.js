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
            window.scrollTo(0, element.offsetTop - 100)
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