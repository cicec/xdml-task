window.Controller = (options) => {
    const obj = {
        view: null,
        model: null,
        init: function init(view, model) {
            this.view = view
            this.model = model
            this.model.init()
            options.init.call(this, view, model)
        }
    }
    Object.keys(options).forEach((key) => {
        if (key !== 'init') obj[key] = options[key]
    })
    return obj
}