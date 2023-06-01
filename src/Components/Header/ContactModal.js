import Modal from 'react-bootstrap/Modal';

function MyContactModal(props) {
  return (
    <Modal
      {...props}
      size='md'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter' className='lato'>
          Contact Me
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>

      <div className='contact-modal'>
          <ul>
            <li style={{ listStyleType: 'none', marginBottom: '1.5rem'}}>
              <a href='mailto:jeff@jbrally.com' alt='email' title='Email me' className='roboto'>
                <span className='fa fa-envelope' style={{ marginRight: '.8rem' }}></span>
                jeff@jbrally.com
              </a>
            </li>
            <li style={{ listStyleType: 'none', marginBottom: '1.5rem'}}>
              <a href='tel:1-302-463-5129' alt='Phone number' title='Call me' className='roboto'>
                <span className='fa fa-phone' style={{ marginRight: '.8rem' }}></span>
                (302)-463-5129
              </a>
            </li>
            <li style={{ listStyleType: 'none'}}>
              <a href='https://www.google.com/maps/place/Wilmington,+NC/@34.2068977,-78.1523955,119498m/data=!3m1!1e3!4m5!3m4!1s0x89a9f5a20debaed5:0x5e66493884093032!8m2!3d34.2103894!4d-77.8868117?hl=en' target='_blank' title='View on a map' className='roboto'>
                <span className='fa fa-map-marker' style={{ marginRight: '.8rem' }}></span>
                Wilmington, NC
              </a>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyContactModal;