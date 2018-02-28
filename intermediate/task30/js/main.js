function main() {
    const $imgs = $('#imgs>img')
    let currentIndex = 0

    const leaveImg = (index) => {
        $($imgs[index]).removeClass('enter').addClass('leave')
            .one('transitionend', (event) => {
                $(event.target).removeClass('leave').addClass('ready')
            })
    }

    const enterImg = (index) => {
        $($imgs[index]).removeClass('ready').addClass('enter')
    }

    setInterval(() => {
        if (currentIndex === $imgs.length) currentIndex = 0
        const nextIndex = currentIndex + 1 < $imgs.length ? currentIndex + 1 : 0
        leaveImg(currentIndex)
        enterImg(nextIndex)
        currentIndex += 1
    }, 1000)
}

window.onload = main