import { FC } from 'react'
import { Typography } from 'antd'
import { JsonForm } from '../../widgets/JsonForm'

export const MainPage: FC = () => {
  return <div style={{ minHeight: '100vh' }}>
    <Typography.Title style={{ textAlign: 'center', paddingTop: 30 }}>Json Parser</Typography.Title>
    <div style={{ maxWidth: 1000, padding: 20, margin: '0 auto' }}>
      <JsonForm />
    </div>
  </div>
}