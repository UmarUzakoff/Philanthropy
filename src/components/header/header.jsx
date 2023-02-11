import './header.scss';
import Navbar from './Navbar/navbar';
import Head from './Head/head';

function Header() {
  return (
    <header className="Header container">
      <Navbar />
      <Head />
    </header>
  );
}

export default Header;