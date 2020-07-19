import * as db from '../services/db'


class providersDAL {
    constructor() {
        this.providers = []
        this.init()
    }

    init() {
        this.providers = db.loadProviders()
    }

    getProviders() {
        return this.providers
    }

    getProvidersById(id) {
        return this.providers.filter(({ name }) => id === name)
    }
}

export default new providersDAL()