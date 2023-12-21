export interface IJsonValidator {
  tryParseJson<T>(json: string): T | undefined
}