import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceList from './components/ServiceList';
import AddServiceForm from './components/AddServiceForm';

function App() {
  const [services, setServices] = useState([
    { id: 1, name: 'General Consultation', description: 'Basic health check-up', price: 50 },
    { id: 2, name: 'Dental Cleaning', description: 'Routine dental cleaning', price: 80 }
  ]);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const updateService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1 className="text-center">Healthcare Services Manager</h1>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <h2>Add New Service</h2>
          <AddServiceForm addService={addService} />
        </Col>

        <Col md={8}>
          <h2>Available Services</h2>
          <ServiceList services={services} updateService={updateService} deleteService={deleteService} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
