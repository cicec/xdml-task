function main() {
    const $slides = $('#slides')
    const $bgImgs = $('#bgImgs>img')
    const $btns = $('#btns>button')

    const imgWidth = 800
    const time = 2000

    let currentIndex = 0
    let interval = null

    const markBtn = () => {
        $($btns[currentIndex]).addClass('active').siblings('.active').removeClass('active')
    }

    const changeBgImg = () => {
        $bgImgs.removeClass('show')
        $bgImgs[currentIndex].classList.add('show')
    }

    const moveSlides = (targetIndex) => {
        $slides.css({
            transform: `translateX(${-(targetIndex * imgWidth)}px)`
        })
    }

    const jumpSlidesTo = (targetIndex) => {
        currentIndex = targetIndex
        if (currentIndex === $btns.length) currentIndex = 0
        moveSlides(currentIndex)
        markBtn()
        changeBgImg()
    }

    const beginAutoShow = () => {
        interval = setInterval(() => {
            jumpSlidesTo(currentIndex + 1)
        }, time)
    }

    const endAutoShow = () => { clearInterval(interval) }

    beginAutoShow()

    for (let i = 0; i < $btns.length; i++) {
        $btns[i].onclick = () => {
            jumpSlidesTo(i)
        }
        $btns[i].onmouseenter = endAutoShow
        $btns[i].onmouseleave = beginAutoShow
    }

    $(document).on('visibilitychange', () => {
        if (document.hidden) {
            endAutoShow()
        } else {
            beginAutoShow()
        }
    })
}

window.onload = main