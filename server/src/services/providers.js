import providersDAL from '../dal/providers';

export const upsertProvider = payload => providersDAL.upsertProvider(payload)
export const deleteProvider = name => providersDAL.deleteProvider(name)