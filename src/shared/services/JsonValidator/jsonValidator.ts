import { IJsonValidator, ValidationResult } from './types.ts'

export const JsonValidator: IJsonValidator = {
  tryParseJson: <T>(json: string): ValidationResult<T> => {
    try {
      return {
        content: JSON.parse(json),
        error: null
      }
    } catch (e) {
      return {
        content: undefined,
        error: (e as SyntaxError).message
      }
    }
  }
}