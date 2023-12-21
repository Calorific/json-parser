import { ChangeEvent, FC, useState } from 'react'
import { Button, Input } from 'antd'
import { JsonValidator } from '../../shared/services/JsonValidator'
import { LocalStorageService } from '../../shared/services/LocalStorageService'

const initialJson = LocalStorageService.getJson() || ''
const initialParsed = JsonValidator.tryParseJson(initialJson)

export const JsonForm: FC = () => {
  const [json, setJson] = useState<string>(initialJson)
  const [parsedJson, setParsedJson] = useState<unknown>(initialParsed)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJson(e.target.value)
    LocalStorageService.setJson(e.target.value)
    const parsed = JsonValidator.tryParseJson(e.target.value)
    setParsedJson(parsed)
  }

  const handleClick = () => {
    console.log(parsedJson)
  }

  const isValidJson = parsedJson !== undefined

  return <div style={{ textAlign: 'center' }}>
    <Input.TextArea
        rows={15}
        value={json}
        onChange={handleChange}
        status={!isValidJson && json !== '' ? 'error' : ''}
        style={{ marginBottom: 20 }}
    />
    <Button type="primary" disabled={!isValidJson || json === ''} onClick={handleClick}>
      Log JSON
    </Button>
  </div>
}