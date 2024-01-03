import { Card, Container, Row } from 'react-bootstrap';
import { City, Forecast } from '../types/types';

interface Props {
  readonly cities: readonly City[];
  readonly inputValue: string;
}

export const Details = ({ cities, inputValue }: Props) => {
  const selectedCity = cities.find((city: City) => city.name.toLowerCase() === inputValue.toLowerCase());

  return (
    <Container>
      <Row className="justify-content-center">
        {selectedCity && selectedCity.forecasts.map((forecast: Forecast) => (
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
