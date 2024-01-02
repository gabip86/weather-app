import { Card, Container, Row } from 'react-bootstrap';
import { Forecast } from '../types/types';

export const Details = ({ ...props }) => {
  const currentCity = props.cities[0];

  return (
    <Container>
      <Row className="justify-content-center">
        {currentCity.forecasts.map((forecast: Forecast) => (
          <Card key={forecast.id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{forecast.day}</Card.Title>
              <p>{forecast.desc}</p>
              <h2>{forecast.temp}</h2>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}
