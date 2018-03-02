function main() {
    const $dropdown = $('#dropdown')
    const $toggle = $('#toggle')

    $toggle.on('click', () => {
        $dropdown.toggleClass('open')
        if ($dropdown.hasClass('open')) {
            setTimeout(() => {
                $(document).one('click', () => {
                    $dropdown.removeClass('open')
                })
            }, 0)
        }
    })

    $dropdown.on('click', (event) => {
        event.stopPropagation()
    })
}

window.onload = main