import ContactNav from './ContactNav';
import MainNav from './MainNav';

function Nav() {
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
