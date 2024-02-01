import React, { ReactElement } from 'react'
import { Title } from './components'

export const App = (): ReactElement => {
  return (
    <>
      <Title title="Main page" />
      <a type="button" className="btn btn-primary" href="/weather">Weather</a>
      <a type="button" className="btn btn-secondary" href="/check-box">Check Box</a>
      <a type="button" className="btn btn-primary" href="/user-search">User search</a>
    </>
  )
}
