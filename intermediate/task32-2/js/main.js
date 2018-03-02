function main() {
    const $btns = $('#btns>button')
    const $slides = $('#slides')

    const imgWidth = 800

    let currentIndex = 0
    let interval = null

    const moveSlides = (index) => {
        $slides.css({
            transform: `translateX(${index * -imgWidth}px)`
        })
    }

    const markBtn = (btn) => {
        $(btn).addClass('active').siblings('.active').removeClass('active')
    }

    const beginAutoShow = () => {
        interval = setInterval(() => {
            currentIndex += 1
            if (currentIndex === $btns.length) currentIndex = 0
            moveSlides(currentIndex)
            markBtn($btns[currentIndex])
        }, 1000)
    }

    const endAutoShow = () => { clearInterval(interval) }

    for (let i = 0; i < $btns.length; i++) {
        $btns[i].onclick = () => {
            currentIndex = i
            moveSlides(currentIndex)
            markBtn($btns[currentIndex])
        }
        $btns[i].onmouseenter = endAutoShow
        $btns[i].onmouseleave = beginAutoShow
    }

    beginAutoShow()
    $slides.on('mouseenter', endAutoShow)
    $slides.on('mouseleave', beginAutoShow)
}

window.onload = main