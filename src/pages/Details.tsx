import { Card, Container, Row } from 'react-bootstrap';
import { City, Forecast } from '../types';

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
          <Card key={forecast.id} style={{ width: '18rem' }} className="m-3">
            <Card.Body>
              <Card.Title>{forecast.day}</Card.Title>
              <h1>{forecast.temp}°</h1>
              <p>{forecast.desc}</p>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}
