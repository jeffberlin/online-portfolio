import { useEffect } from 'react';
import ContactNav from './ContactNav';
import MainNav from './MainNav';

function Nav() {
  useEffect(() => {
    document.title = "Jeff Berlin Portfolio"
  })
  
  return (
    <header>
      <MainNav />
      <div
        style={{
          backgroundColor: '#009688',
          paddingTop: '6rem',
          paddingBottom: '8rem'
        }}
      >
      </div>
      <ContactNav />
    </header>
  );
}

export default Nav;
