import './testimonials.scss';
import testimonials from '../Testimonials/images/testimonials.svg';
import check from '../Testimonials/images/check.svg';

function Testimonials() {
  return (
    <section className="Testimonials">
        <img loading='lazy' decoding='async' src={testimonials} alt="img" />
        <div>
            <h6>Testimonials</h6>
            <h3>See how we are making a difference</h3>
            <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis etolme netus et malesuada fames urna nec tincidunt praesen</p>
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
            <button className='btn1'>Donate now</button>
        </div>
    </section>
  );
}

export default Testimonials;