import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import MyHashLink from './MyHashLink';
import resumePDF from './jeff-berlin-resume.pdf';

function ContactNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="md" fixed="top" variant="dark">
        <Container fluid>
          <Navbar.Brand style={{ display: 'flex' }}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jeff-berlin" target="_blank" rel="noreferrer" alt="LinkedIn Profile" title="LinkedIn Profile"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/jeffberlin" target="_blank" rel="noreferrer" alt="Github Profile" title="Github Profile"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://wellfound.com/u/jeffberlin" target="_blank" rel="noreferrer" alt="Wellfound Profile" title="Wellfound Profile"><i className="fa fa-angellist" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://www.behance.net/jeffberlin" target="_blank" rel="noreferrer" alt="Behance Profile" title="Behance Profile"><i className="fa fa-behance" aria-hidden="true"></i></a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={4}
                  to="/#portfolio"
                  as={MyHashLink}
                  className="roboto"
                >
                  Portfolio
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={1}
                  to="/#skills"
                  as={MyHashLink}
                  className="roboto"
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={2}
                  to="/#experience"
                  as={MyHashLink}
                  className="roboto"
                >
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={3}
                  to="/#education"
                  as={MyHashLink}
                  className="roboto"
                >
                  Education
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <a href={resumePDF} download="jeff-berlin-resume" alt="Download Resume PDF" title="Download Resume PDF">
                  <button className="download-btn roboto" type="button" style={{ letterSpacing: '.5px' }}>Download Resume</button>
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ContactNav;
