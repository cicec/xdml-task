{
    const view = View('#messages')
    const model = Model({ resourceName: 'message' })
    const controller = Controller({
        form: null,
        init: function init() {
            this.form = document.getElementById('leave-message')
            this.loadMessage()
            this.bindEvents()
        },
        addMessageNode: function addMessageNode(value) {
            const messagesList = view.querySelector('ul')
            const messageTemplate = messagesList.querySelector('li.hidden')
            const messageElement = messageTemplate.cloneNode(true)
            messageElement.querySelector('#nickname').textContent = value.nickname
            messageElement.querySelector('#datetime').textContent = value.datetime.toLocaleString()
            messageElement.querySelector('#content').textContent = value.content
            messageElement.classList.remove('hidden')
            messagesList.appendChild(messageElement)
        },
        saveMessage: function saveMessage() {
            const nickname = this.form.querySelector('input[name=nickname]').value
            const content = this.form.querySelector('input[name=content]').value
            const datetime = new Date()
            if (nickname && content) {
                this.model.save({ nickname, content, datetime }).then(() => {
                    this.addMessageNode({ nickname, content, datetime })
                    this.form.querySelector('input[name=nickname]').value = ''
                    this.form.querySelector('input[name=content]').value = ''
                })
            }
        },
        loadMessage: function loadMessage() {
            this.model.fetch().then((messages) => {
                messages.forEach((message) => {
                    this.addMessageNode(message.attributes)
                })
            })
        },
        bindEvents: function bindEvents() {
            this.form.addEventListener('submit', (event) => {
                event.preventDefault()
                this.saveMessage()
            })
        }
    })
    window.addEventListener('load', () => { controller.init(view, model) })
}