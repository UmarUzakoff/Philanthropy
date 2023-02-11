import './result.scss';
import like from '../Result/images/like.svg';
import ball from '../Result/images/ball.svg';
import kindness from '../Result/images/kindness.svg';
import student from '../Result/images/student.svg';
import resultimg from '../Result/images/resultimg.png';

function Result() {
  return (
    <section className="Result">
        <div className='leftres'>
            <h6>Our Results</h6>
            <h3>Take a look at the big impact we have done</h3>
            <ul>
                <li>
                    <img src={like} alt="like" />
                    <div>
                        <h5>500m</h5>
                        <span>Liters of water</span>
                    </div>
                </li>
                <li>
                    <img src={kindness} alt="like" />
                    <div>
                        <h5>7000+</h5>
                        <span>Houses built</span>
                    </div>
                </li>
                <li>
                    <img src={ball} alt="like" />
                    <div>
                        <h5>10,000+</h5>
                        <span>Toys delivered</span>
                    </div>
                </li>
                <li>
                    <img src={student} alt="like" />
                    <div>
                        <h5>2000+</h5>
                        <span>Schools built</span>
                    </div>
                </li>
            </ul>
            <button className='btn1'>Donate now</button>
        </div>
        <div className='rightres'>
            <img loading='lazy' decoding='async' src={resultimg} alt="img" />
        </div>
    </section>
  );
}

export default Result;