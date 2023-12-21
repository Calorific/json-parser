import { ILocalStorageService } from './types.ts'

export const jsonKey = 'json'

export const LocalStorageService: ILocalStorageService = {
  getJson: (): string | null => {
    return localStorage.getItem(jsonKey)
  },
  setJson: (value: string): void => {
    localStorage.setItem(jsonKey, value)
  }
}