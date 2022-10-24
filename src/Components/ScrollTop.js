import { useState } from 'react';

function ScrollTop() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 75){
      setVisible(true)
    }
    else if (scrolled <= 75){
      setVisible(false)
    }
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }}
        className="scrolltop text-center"
        title="Scroll to top"
        style={{display: visible ? 'inline' : 'none'}}
      >
        <i className="fa fa-angle-up"></i>
      </button>
    </div>
  );
}

export default ScrollTop;
