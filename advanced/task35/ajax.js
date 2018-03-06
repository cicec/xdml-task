const jQuery = () => {}
window.jQuery = jQuery
window.$ = jQuery

//  任务1（封装ajax）
$.ajax = (url, method, body, success, fail) => {
    const request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                success(request.responseText)
            } else if (request >= 400) {
                fail(request)
            }
        }
    }
    request.send(body)
}

//  任务2（使用Promise）
$.ajax = ({ url, method, body, headers }) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method, url)
    Object.keys(headers).forEach((key) => {
        request.setRequestHeader(key, headers[key])
    })
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                resolve(request.responseText)
            } else if (request >= 400) {
                reject(request)
            }
        }
    }
    request.send(body)
})

payBtn.onclick = () => {
    $.ajax({
        url: '/pay',
        method: 'post',
        body: '{ "username": "cc" }'
    }).then((responseText) => {
        console.log(responseText)
    }, (request) => {
        console.log(request)
    })
}