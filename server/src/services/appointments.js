import providersDAL from '../dal/providers';

const filterDates = (availDates, requestedDate) => {
    const available = availDates.findIndex(({ from, to }) => {
        return requestedDate >= from && requestedDate <= to
    })
    return available !== -1
}

const filterSpecialities = (specialties, requestedSpec) => {
    const available = specialties.findIndex(spec => {
        return spec.toLowerCase() === requestedSpec.toLowerCase()
    })
    return available !== -1
}

export const searchProviders = ({ threshold, specialty: requestedSpeciality , time }) => {
    const providers = providersDAL.getProviders()
    return providers.filter(({ score, specialties, availableDates }) => {
        return score >= threshold && filterDates(availableDates, time) && filterSpecialities(specialties, requestedSpeciality)
    }).sort((a,b) => b.score - a.score).map(provider => provider.name)
}

export const setAppointment = ({ name, date }) => {
    const [provider] = providersDAL.getProvidersById(name)
    if (!provider) {
        throw new Error(`Provider ${name} not found`)
    }
    if(!filterDates(provider.availableDates, date)) {
        throw new Error(`Provider ${name} is not available on ${date}`)
    }
    return provider
}