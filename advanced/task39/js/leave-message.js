{
    const view = document.getElementById('messages')

    const model = {
        init: function init() {
            const APP_ID = 'xTqy4SjUaECG3pte1pm9dRWz-gzGzoHsz'
            const APP_KEY = '3fhGnA4VIXClcTALpNRigzFF'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function fetch() {
            const query = new AV.Query('message')
            return query.find()
        },
        save: function save(value) {
            const Message = AV.Object.extend('message')
            const message = new Message()
            return message.save(value)
        }
    }

    const controller = {
        view: null,
        model: null,
        form: null,
        init: function init() {
            this.view = view
            this.model = model
            this.form = document.getElementById('leave-message')
            this.model.init()
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
    }

    window.addEventListener('load', () => { controller.init() })
}