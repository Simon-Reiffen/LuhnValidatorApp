import React from 'react';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  let [ccn, setCcn] = React.useState(0);
  let [creditCardState, setCreditCardState] = React.useState(null);


  function handleChange(event) {
    setCcn(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCreditCardState(null);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ccn })
    };
    fetch('/api/validate', requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data === true) {
          setCreditCardState(true);
        } else {
          setCreditCardState(false);
        }
      }).catch((error) => {
        console.error('Error:', error);
        setCreditCardState(false);
      });
  }

  return (
    <div>
        <h1 className='header'>Luhn's Validator</h1>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" >
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name"/>
          </Form.Group>
          <Form.Group as={Col} md="4" >
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name"/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="8" >
            <Form.Label>Credit Card Number</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="CCN"
              onChange={handleChange}
              isInvalid={creditCardState === false}
              isValid={creditCardState === true}
            />
            <Form.Control.Feedback type="valid">Credit card number valid</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid"> Credit card number invalid.</Form.Control.Feedback> 
          </Form.Group>
          <Form.Group as={Col} md="2" >
            <Form.Label>Expiration</Form.Label>
            <Form.Control type="text" placeholder="??/??" />
          </Form.Group>
          <Form.Group as={Col} md="2" >
            <Form.Label>CVV Code</Form.Label>
            <Form.Control type="number" placeholder="???"/>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" />
          </Form.Group>
          <Form.Group as={Col} md="3">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check label="Agree to terms and conditions"/>
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

export default App;
