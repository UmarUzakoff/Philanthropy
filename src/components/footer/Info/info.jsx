import './info.scss';
import logo from '../../header/Navbar/images/logo.svg';

function Info() {
  return (
    <section className="Info">
        <div className='info1'>
            <img loading='lazy' decoding='async' src={logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris.</p>
        </div>
        <div className='info2'>
            <h6>Menu</h6>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Blog post</li>
                <li>Donate</li>
                <li>Donate Single</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='info3'>
        <h6>Utility Pages</h6>
            <ul>
                <li>Start here</li>
                <li>Styleguide</li>
                <li>Password Protected</li>
                <li>404 Not found</li>
                <li>Licenses</li>
                <li>Changelog</li>
            </ul>
        </div>
        <div className='info4'>
            <h3>Join us and let’s make a better world, today</h3>
            <div>
                <button className='btn1'>Donate now</button>
                <button className='btn2'>About our charity</button>
            </div>
        </div>
    </section>
  );
}

export default Info;