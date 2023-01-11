import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jobInfo from './ExperienceArray';

function Experience() {
  return (
    <section className="experience" id="experience" style={{ paddingTop: '3rem' }}>
      <Container className="section-container">
        <Row>
          <Col lg={10} md={12}>
            <h2 className="section-title">Experience</h2>
          </Col>
        </Row>
        {jobInfo.map((job, index) => (
          <Row key={index}>
            <Col lg={4} className="job-col-left">
              <div className="job-info text-right">
                <p className="job-title">{job.title}</p>
                <p className="text-thin">{job.start}&nbsp;-&nbsp;{job.end}</p>
              </div>
            </Col>
            <Col lg={8} md={12} className="job-col-right">
              <div>
                <p className="section-place"><a href={job.url} target="_blank">{job.company}&nbsp;<span className="material-symbols-outlined" style={{ color: 'orange', verticalAlign: 'middle', fontSize: '1.1rem' }}>open_in_new</span></a></p>
                <p className="job-title md-screen">{job.title}</p>
                <p className="text-thin md-screen">{job.start}&nbsp;-&nbsp;{job.end}</p>
                <p className="text-thin"><i className="fa fa-map-marker"></i>{job.location}</p>
                <p className="section-description">{job.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Experience;
