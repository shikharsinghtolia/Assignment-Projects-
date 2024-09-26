import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

function AddServiceForm({ addService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Service name is required';
    if (!description) newErrors.description = 'Description is required';
    if (!price) newErrors.price = 'Price is required';
    else if (price <= 0) newErrors.price = 'Price must be a positive number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      addService({ name, description, price: parseFloat(price) });
      setName('');
      setDescription('');
      setPrice('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Card className="shadow-sm p-3 mb-4">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Service Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              isInvalid={!!errors.description}
            />
            <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Add Service
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AddServiceForm;
