import { ChangeEvent, FC, useState } from 'react'
import { Alert, Button, Input } from 'antd'
import { JsonValidator } from '../../shared/services/JsonValidator'
import { LocalStorageService } from '../../shared/services/LocalStorageService'

const initialJson = LocalStorageService.getJson() || ''
const initialParsed = JsonValidator.tryParseJson(initialJson)

export const JsonForm: FC = () => {
  const [json, setJson] = useState<string>(initialJson)
  const [parsedJson, setParsedJson] = useState<unknown>(initialParsed.content)
  const [error, setError] = useState<string>(initialParsed.error || '')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value)
    LocalStorageService.setJson(e.target.value)
    const parsed = JsonValidator.tryParseJson(e.target.value)
    setParsedJson(parsed.content)
    setError(parsed.error || '')
  }

  const handleClick = () => {
    console.log(parsedJson)
  }

  return <div style={{ textAlign: 'center' }}>
    <Input.TextArea
        rows={15}
        value={json}
        tabIndex={-1}
        onChange={handleChange}
        status={error && json !== '' ? 'error' : ''}
        style={{ marginBottom: 20 }}
    />
    {error && json !== '' && <Alert message={error} type="error" style={{ marginBottom: 10 }} />}
    <Button type="primary" disabled={!!error || json === ''} onClick={handleClick}>
      Log JSON
    </Button>
  </div>
}