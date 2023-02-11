import './news.scss';
import news1 from '../News/images/news1.svg';
import news2 from '../News/images/news2.svg';

function News() {
  return (
    <section className="News">
        <div className='news1'>
            <h6>News & Resources</h6>
            <h3>Read our latest news</h3>
        </div>
        <div className='news2'>
            <img loading='lazy' decoding='async' src={news1} alt="img" />
            <img className='none' loading='lazy' decoding='async' src={news2} alt="img" />
        </div>
        <div className='news3'>
            <button className='btn1'>Donate now</button>
            <button className='btn2'>Read more news</button>
        </div>
    </section>
  );
}

export default News;