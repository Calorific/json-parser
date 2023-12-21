export type ValidationResult<T> = {
  content: T | undefined
  error: string | null
}

export interface IJsonValidator {
  tryParseJson<T>(json: string): ValidationResult<T>
}