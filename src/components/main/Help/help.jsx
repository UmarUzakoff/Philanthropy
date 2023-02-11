import './help.scss';
import help1 from '../Help/images/help1.png';
import help2 from '../Help/images/help2.png';
import help3 from '../Help/images/help3.png';
import help4 from '../Help/images/help4.png';
import help5 from '../Help/images/help5.png';
import help6 from '../Help/images/help6.png';

function Help() {
  return (
    <section className="Help">
        <hr />
        <article>
            <div className='tophelp'>

                <div>
                    <h6>How we help?</h6>
                    <h3>What are we doing to assist these communities?</h3>
                </div>

                <button className='btn1'>Donate now</button>

            </div>

            <div className='bottomhelp'>
                <ul>
                    <li>
                        <img loading='lazy' decoding='async' src={help1} alt="icon" />
                        <h6>House & shelter</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                    <li>
                        <img loading='lazy' decoding='async' src={help2} alt="icon" />
                        <h6>Love & support</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                    <li>
                        <img loading='lazy' decoding='async' src={help3} alt="icon" />
                        <h6>Food & groceries</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                    <li>
                        <img loading='lazy' decoding='async' src={help4} alt="icon" />
                        <h6>Environmental help</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                    <li>
                        <img loading='lazy' decoding='async' src={help5} alt="icon" />
                        <h6>Education</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                    <li>
                        <img loading='lazy' decoding='async' src={help6} alt="icon" />
                        <h6>Health & insurance</h6>
                        <p>Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar dolor elementum tempus hac.</p>
                    </li>
                </ul>
            </div>
        </article>
    </section>
  );
}

export default Help;