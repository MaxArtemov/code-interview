import { readFileSync } from 'fs'
import path from 'path'

export const loadProviders = () => {
  const providers = JSON.parse(readFileSync(path.join(__dirname, '../../../providers/providers.json'), 'utf8'));
  return providers
}