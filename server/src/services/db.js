import { readFileSync } from 'fs'
import path from 'path'

const providersPath = '/home/max/Desktop/Interviews/Vimn/code-interview/providers/providers.json'

export const loadProviders = () => {
  const providers = JSON.parse(readFileSync(providersPath, 'utf8'));
  console.log({ providers })
  return providers
}