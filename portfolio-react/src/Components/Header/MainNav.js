import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import { HashLink as Link } from 'react-router-hash-link';
import MyHashLink from './MyHashLink';

function ContactNav() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('jeff-berlin-resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'jeff-berlin-resume.pdf';
        alink.click();
      })
    })
  }

  return (
    <>
      <Navbar collapseOnSelect expand="md" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{ display: 'flex' }}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jeff-berlin" target="_blank" alt="LinkedIn Profile" title="LinkedIn Profile"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/jeffberlin" target="_blank" alt="Github Profile" title="Github Profile"><i className="fa fa-github" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://angel.co/jeffberlin" target="_blank" alt="AngelList Profile" title="AngelList Profile"><i className="fa fa-angellist" aria-hidden="true"></i></a>
            </div>
            <div className="social-icon">
              <a href="https://www.behance.net/jeffberlin" target="_blank" alt="Behance Profile" title="Behance Profile"><i className="fa fa-behance" aria-hidden="true"></i></a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={1}
                  to="/#skills"
                  as={MyHashLink}
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={2}
                  to="/#experience"
                  as={MyHashLink}
                >
                  Experience
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={3}
                  to="/#education"
                  as={MyHashLink}
                >
                  Education
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-scroll">
                <Nav.Link
                  eventKey={4}
                  to="/#projects"
                  as={MyHashLink}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <button className="download-btn" onClick={onButtonClick}>Download Resume</button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ContactNav;
