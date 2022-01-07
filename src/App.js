import { Col, Container, Row } from 'reactstrap'
import Input from './components/inputs/Input'

function App () {
  return (
    <Container fluid className='app'>
      <Row>
        <Col md={3}>
          <Input trailingIcon={'👋'} name={'First name'} label={'First name'} />
        </Col>
        <Col md={6}>
          <Input
            placeholder='Last name'
            name={'First name'}
            label={'First name'}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default App
