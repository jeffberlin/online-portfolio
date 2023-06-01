import { useContext } from 'react';
import projects from './ProjectsArray';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';

// For the Accordion
function CustomToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className={isCurrentEventKey ? 'close-project roboto' : 'open-project roboto'}
      onClick={decoratedOnClick}
    >
      {isCurrentEventKey ? 'Close' : 'Read More'}
    </button>
  );
}

function Portfolio() {
  return (
    <section className="projects" id="portfolio" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10}>
            <h2 className="section-title lato">Portfolio</h2>
          </Col>
        </Row>
        <Accordion>
          <Row>
            {projects.map((project, index) => (
              <Col xl={3} lg={4} md={6} sm={6} xs={12} key={index}>
                <Card>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title className='lato'>{project.title}</Card.Title>
                    <Card.Subtitle className='roboto' style={{ fontSize: '.8rem', fontWeight: '400', letterSpacing: '.5px' }}>{project.category}</Card.Subtitle>
                    <CustomToggle eventKey={project.id}></CustomToggle>
                    <Accordion.Collapse eventKey={project.id}>
                      <Card.Text className='roboto' style={{ color: '#595959' }}>{project.description}</Card.Text>
                    </Accordion.Collapse>
                  </Card.Body>
                  <a href={project.url} target={project.target} className="card-footer-button roboto">View&nbsp;{project.type}</a>
                </Card>
              </Col>
            ))}
          </Row>
        </Accordion>
      </Container>
    </section>
  );
}

export default Portfolio;
