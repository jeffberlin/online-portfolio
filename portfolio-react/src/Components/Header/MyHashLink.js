import { NavHashLink } from 'react-router-hash-link';

function MyHashLink(props) {
  return (
    <NavHashLink
      smooth
      // Set the 'to' hash link
      to={props.to}
      className={props.className ? props.className : ""}
      // On click, use the Navbar onClick to collapse menu
      onClick={props.onClick}
    >
      {props.children}
    </NavHashLink>
  );
}

export default MyHashLink;
