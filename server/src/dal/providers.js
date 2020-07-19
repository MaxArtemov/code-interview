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

    upsertProvider(payload) {
        const { name: newName } = payload
        const index = this.providers.findIndex(({ name }) => name === newName)
        if (index !== -1) {
            this.providers[index] = payload
        } else {
            this.providers.push(payload)
        }
    }

    deleteProvider(deleteName) {
        console.log({ deleteName, p: this.providers })
        const index = this.providers.findIndex(({ name }) => name === deleteName)
        if (index !== -1) {
            this.providers.splice(index, 1)
        } else {
            throw new Error('Provider not found')
        }
    }
}

export default new providersDAL()