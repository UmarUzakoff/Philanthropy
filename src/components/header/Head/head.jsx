import './head.scss';
import righthead from '../Head/images/righthead.png';

function Head() {
  return (
    <article className="Head">
        <hr />
        <div className='head'>
                
            <div className='righthead'>
                <span className='span'></span>
                <h1>Giving help to those who need it</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                <div>
                    <button className='btn1'>Donate now</button>
                    <button className='btn2'>About our charity</button>
                </div>
            </div>
            <div className='lefthead'>
                <img loading="lazy" decoding='async' src={righthead} alt="img" />
            </div>

        </div>
    </article>
  );
}

export default Head;