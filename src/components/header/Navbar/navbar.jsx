import './navbar.scss';
import logo from '../Navbar/images/logo.svg';
import navright from '../Navbar/images/navright.svg'

function Navbar() {
  return (
    <nav className="Navbar">
      <div className='navleft'>
        <img loading="lazy" decoding='async' src={logo} alt="logo" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
        </ul>
      </div>
      <div className='navright'>
        <img loading="lazy" decoding='async' src={navright} alt="img" />
        <button className='btn1'>Donate now</button>
      </div>
    </nav>
  );
}

export default Navbar;