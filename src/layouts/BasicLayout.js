import React, { useEffect } from 'react'
import { Container } from 'reactstrap'

const BasicLayout = props => {
  useEffect(() => {
    document.title = props.title + ' | NightWalk'
    return () => (document.title = 'Loading | NightWalk')
  }, [props.title])

  return <Container fluid>{props.children}</Container>
}

export default BasicLayout
