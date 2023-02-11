import './main.scss';
import Statistics from './Statistics/statistics';
import About from './About/about';
import Result from './Result/result';
import Youtube from './Youtube/youtube';
import Help from './Help/help';
import Join from './Join/join';
import Testimonials from './Testimonials/testimonials';
import News from './News/news';

function Main() {
  return (
    <main className="Main container">
      <Statistics />
      <About />
      <Result />
      <Youtube />
      <Help />
      <Join />
      <Testimonials />
      <News />
    </main>
  );
}

export default Main;