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
        <Modal.Title id='contained-modal-title-vcenter'>
          Contact Me!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        <div className='contact-modal' style={{ marginBottom: '1.5rem' }}>
          <a href='mailto:jeff@jbrally.com' alt='email' title='Email me'>
            <span className='fa fa-envelope' style={{ marginRight: '.8rem' }}></span>
            jeff@jbrally.com
          </a>
        </div>
        <div className='contact-modal'>
          <a href='tel:1-302-463-5129' alt='Phone number' title='Call me'>
            <span className='fa fa-phone' style={{ marginRight: '.8rem' }}></span>
            (302)-463-5129
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MyContactModal;