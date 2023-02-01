import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FoodTruckFinderVideo from '../images/food-truck-finder-video.mp4';

function FoodTruckFinder() {
  useEffect(() => {
    document.title = "Jeff Berlin - Food Truck Finder App"
  })

  return (
    <div className="project-img-page">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <video
              src={FoodTruckFinderVideo}
              width="60%"
              height="60%"
              type="video/mp4"
              controls
              autoPlay
              loop
              muted
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FoodTruckFinder;