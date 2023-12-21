import { IJsonValidator } from './types.ts'

export const JsonValidator: IJsonValidator = {
  tryParseJson: <T>(json: string): T | undefined => {
    try {
      return JSON.parse(json)
    } catch (e) {
      return undefined
    }
  }
}