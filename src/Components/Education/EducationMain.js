import education from './EducationArray';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Education() {
  return (
    <section className="education" id="education" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10} md={12}>
            <h2 className="section-title">Education</h2>
          </Col>
        </Row>
        {education.map((edu, index) => (
          <Row className="justify-content-center" key={index}>
            <Col lg={10} md={12} className="edu-info">
              <div>
                <p className="section-place"><a href={edu.url} target="_blank" rel="noreferrer">{edu.name}&nbsp;<span className="material-symbols-outlined" style={{ color: 'orange', verticalAlign: 'middle', fontSize: '1.1rem' }}>open_in_new</span></a></p>
                <p className="edu-course">{edu.course}</p>
                <p className="text-thin">{edu.start}&nbsp;-&nbsp;{edu.end}</p>
                <p className="section-description">{edu.description}</p>
                <Image src={edu.image} width={350} alt={edu.imageAlt} className="edu-img" />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Education;
