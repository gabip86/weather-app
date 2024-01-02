import { Card, Container, Row } from 'react-bootstrap';

export const Details = ({ ...props }) => {
  const currentCity = props.cities[0];

  // TODO any
  return (
    <Container>
      <Row className="justify-content-center">
        {currentCity.weather.map((day: any) => (
          <Card key={day.id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{day.day}</Card.Title>
              <p>{day.desc}</p>
              <h2>{day.temp}</h2>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  )
}
