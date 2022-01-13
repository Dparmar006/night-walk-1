import React, { useRef, useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Button from '../../components/buttons/Button'
import Input from '../../components/inputs/Input'
import TextArea from '../../components/inputs/TextArea'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [inputs, setInputs] = useState({
    title: '',
    description: ''
  })
  const inputRef = useRef()
  const handleSubmit = () => {
    if (inputs.title && inputs.description) {
      setNotes([...notes, { ...inputs }])
      setInputs({ ...inputs, title: '', description: '' })
      inputRef.current.focus()
    }
  }

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return (
    <Row>
      <Col tag={'form'} md={6} xs={12}>
        <Input
          name='title'
          value={inputs.title}
          onChange={handleChange}
          ref={inputRef}
          placeholder='Title'
          autoFocus
          required
        />
        <br />
        <TextArea
          name='description'
          value={inputs.description}
          onChange={handleChange}
          placeholder='Description'
          required
        />
        <br />
        <Button
          emoji={'💾'}
          title={'Save'}
          className={'btn btn-primary mx-1 mb-4'}
          buttonType='submit'
          onClick={handleSubmit}
        />
      </Col>
      <Col md={6} xs={12}>
        <Card
          color='black'
          style={{ maxHeight: '39vh', height: '100%', overflowY: 'scroll' }}
        >
          <CardBody>
            {notes.length ? (
              <ul className='list'>
                {notes.map(note => (
                  <li className='list-item'>
                    <h4 className='list-title'>{note.title}</h4>
                    <h6 className='list-description'>{note.description}</h6>
                    <hr />
                  </li>
                ))}
              </ul>
            ) : (
              <h2>Please add notes !</h2>
            )}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default Notes
