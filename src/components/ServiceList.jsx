import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function ServiceList({ services, updateService, deleteService }) {
  const handleDelete = (id) => {
    deleteService(id);
  };

  const handleUpdate = (service) => {
    const updatedService = {
      ...service,
      name: prompt('Update Name:', service.name) || service.name,
      description: prompt('Update Description:', service.description) || service.description,
      price: prompt('Update Price:', service.price) || service.price,
    };
    updateService(updatedService);
  };

  return (
    <Row>
      {services.map((service) => (
        <Col md={6} lg={4} key={service.id}>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text className="text-muted">Price: ${service.price}</Card.Text>
              <div className="d-flex justify-content-between">
                <Button variant="outline-primary" onClick={() => handleUpdate(service)}>
                  Update
                </Button>
                <Button variant="outline-danger" onClick={() => handleDelete(service.id)}>
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ServiceList;
