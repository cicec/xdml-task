function main() {
    const $slides = $('#slides')
    const $bgImgs = $('#bgImgs>img')
    const $btns = $('#btns>button')
    const $imgs = $('#slides>img')

    const $pageUpBtn = $('#pageUp')
    const $pageDownBtn = $('#pageDown')

    const imgWidth = 800
    let currentIndex = 0

    const markBtn = () => {
        $($btns[currentIndex]).addClass('active').siblings('.active').removeClass('active')
    }

    const changeBgImg = () => {
        $bgImgs.removeClass('show')
        $bgImgs[currentIndex].classList.add('show')
    }

    const moveSlides = (targetIndex) => {
        $slides.css({
            transform: `translateX(${-imgWidth - (targetIndex * imgWidth)}px)`
        })
        return $slides
    }

    const jumpSlidesTo = (targetIndex) => {
        if (targetIndex > $imgs.length - 1) targetIndex = 0
        if (targetIndex < 0) targetIndex = $imgs.length - 1
        if (currentIndex === 0 && targetIndex === $imgs.length - 1) {
            moveSlides(-1).one('transitionend', () => {
                $slides.hide().offset()
                moveSlides($imgs.length - 1).show()
            })
        } else if (currentIndex === $imgs.length - 1 && targetIndex === 0) {
            moveSlides($imgs.length).one('transitionend', () => {
                $slides.hide().offset()
                moveSlides(0).show()
            })
        } else {
            moveSlides(targetIndex)
        }
        currentIndex = targetIndex
        markBtn()
        changeBgImg()
    }

    $slides.append($imgs.eq(0).clone(true))
    $slides.prepend($imgs.eq($imgs.length - 1).clone(true))

    for (let i = 0; i < $btns.length; i++) {
        $btns[i].onclick = () => {
            jumpSlidesTo(i)
        }
    }

    $pageUpBtn.on('click', () => { jumpSlidesTo(currentIndex - 1) })
    $pageDownBtn.on('click', () => { jumpSlidesTo(currentIndex + 1) })

    $(document).on('visibilitychange', () => {
        if (document.hidden) {
            endAutoShow()
        } else {
            beginAutoShow()
        }
    })
}

window.onload = main