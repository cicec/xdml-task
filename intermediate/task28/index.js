function jQuery(node) {
    const $nodes = { length: 0 }

    if (typeof node === 'string') {
        selectedNodes = document.querySelectorAll(node)
        for (let i = 0; i < selectedNodes.length; i++) {
            $nodes[i] = selectedNodes[i]
            $nodes.length += 1
        }
    } else if (typeof node === 'object') {
        $nodes[0] = node
        $nodes.length = 1
    } else {
        throw new Error('Param error')
    }

    $nodes.addClass = (className) => {
        for (let i = 0; i < $nodes.length; i++) {
            $nodes[i].classList.add(className)
        }
    }

    $nodes.setText = (text) => {
        for (let i = 0; i < $nodes.length; i++) {
            $nodes[i].textContent = text
        }
    }

    return $nodes
}

window.jQuery = jQuery
window.$ = jQuery