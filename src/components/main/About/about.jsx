import './about.scss';
import topimg from '../About/images/topimg.png';
import bottomimg from '../About/images/bottomimg.png';
import rightimg from '../About/images/rightimg.png';
import check from '../About/images/check.svg';

function About() {
  return (
    <section className="About">
        <hr />
        <article>
            <div className='lefticle container'>
                <div>
                    <h6>About us</h6>
                    <h3>We are here to support vulnerable communities</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua molestie a iaculis at erat pellentesque adipiscing commodo elit at.</p>
                </div>
                <div className='immg'>
                    <img loading="lazy" decoding='async' src={topimg} alt="img" />
                    <img loading="lazy" decoding='async' src={bottomimg} alt="img" />
                </div>
            </div>
            <div className='righticle'>
                <div>
                    <button className='btn1'>Donate now</button>
                    <button className='btn2'>About us</button>
                </div>
                <img loading='lazy' decoding='async' src={rightimg} alt="img" />
                <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.</p>
                <ul>
                    <li>
                        <img src={check} alt="check" />
                        <span>Excepteur sint occaecat cupidatat non proident</span>
                    </li>
                    <li>
                        <img src={check} alt="check" />
                        <span>Pellentesque elit ullamcorper dignissim</span>
                    </li>
                    <li>
                        <img src={check} alt="check" />
                        <span>Nibh mauris cursus mattis molestie a iaculis</span>
                    </li>
                </ul>
            </div>
        </article>
    </section>
  );
}

export default About;