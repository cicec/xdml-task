const selectPortfolioClassify = () => {
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

window.onload = selectPortfolioClassify