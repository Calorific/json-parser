import { describe, it, expect } from 'vitest'
import { JsonValidator } from './jsonValidator.ts'

const { tryParseJson } = JsonValidator

describe('tryParseJson', () => {
  it('returns undefined for empty string', () => {
    // Arrange
    const json = ''

    // Act
    const res = tryParseJson(json)

    // Assert
    expect(res).toBe(undefined)
  })

  it('returns undefined for only one quotation mark', () => {
    // Arrange
    const json = '{"name":"name}'

    // Act
    const res = tryParseJson(json)

    // Assert
    expect(res).toBe(undefined)
  })

  it('returns undefined for only one quotation mark', () => {
    // Arrange
    const json = '{"name":"name}'

    // Act
    const res = tryParseJson(json)

    // Assert
    expect(res).toBe(undefined)
  })

  it('returns parsed object for correct json', () => {
    // Arrange
    const json = '{"name":"name"}'

    // Act
    const res = tryParseJson(json)

    // Assert
    expect(res).toEqual({ name: 'name' })
  })
})