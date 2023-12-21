export interface ILocalStorageService {
  setJson(value: string): void
  getJson(): string | null
}