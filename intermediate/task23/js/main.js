function main() {
    //  顶部导航栏滚动样式
    window.onscroll = () => {
        if (window.scrollY > 0) {
            topNavBar.classList.add('scolling')
        } else {
            topNavBar.classList.remove('scolling')
        }
    }

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