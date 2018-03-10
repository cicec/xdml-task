window.Model = (options) => {
    const { resourceName } = options
    return {
        init: function init() {
            const APP_ID = 'xTqy4SjUaECG3pte1pm9dRWz-gzGzoHsz'
            const APP_KEY = '3fhGnA4VIXClcTALpNRigzFF'
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            })
        },
        fetch: function fetch() {
            const query = new AV.Query(resourceName)
            return query.find()
        },
        save: function save(value) {
            const Message = AV.Object.extend(resourceName)
            const message = new Message()
            return message.save(value)
        }
    }
}