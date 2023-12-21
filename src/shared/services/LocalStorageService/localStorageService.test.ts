import { describe, it, expect } from 'vitest'
import { LocalStorageService, jsonKey } from './localStorageService.ts'

const { getJson, setJson } = LocalStorageService

describe('getJson', () => {
  it('returns null when nothing is set', () => {
    // Arrange
    const result = null

    // Act
    const json = getJson()

    // Assert
    expect(json).toBe(result)
  })

  it('returns string when value was set', () => {
    // Arrange
    const json = '{"name":"name"}'
    localStorage.setItem(jsonKey, json)

    // Act
    const res = getJson()

    // Assert
    expect(res).toBe(json)
  })
})

describe('setJson', () => {
  it('sets value to localStorage', () => {
    // Arrange
    const value = '{"name":"name"}'

    // Act
    setJson(value)

    // Assert
    expect(localStorage.getItem(jsonKey)).toBe(value)
  })
})