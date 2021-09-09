import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader({LoadingText}) {
  return (
<Spinner animation="border" role="status">
  <span className="visually-hidden">LoadingText</span>
</Spinner>
  )
}

export default Loader
