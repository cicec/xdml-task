function main() {
    const $btns = $('#btns>button')
    const $imgs = $('#imgs')

    const imgWidth = 800

    let currentIndex = 0
    let interval = null

    const moveImgs = (index) => {
        $imgs.css({
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
            moveImgs(currentIndex)
            markBtn($btns[currentIndex])
        }, 2000)
    }

    const endAutoShow = () => { clearInterval(interval) }

    for (let i = 0; i < $btns.length; i++) {
        $btns[i].onclick = () => {
            currentIndex = i
            moveImgs(currentIndex)
            markBtn($btns[currentIndex])
        }
        $btns[i].onmouseenter = endAutoShow
        $btns[i].onmouseleave = beginAutoShow
    }

    beginAutoShow()
    $imgs.on('mouseenter', endAutoShow)
    $imgs.on('mouseleave', beginAutoShow)
}

window.onload = main