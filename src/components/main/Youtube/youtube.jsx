import './youtube.scss';

function Youtube() {
  return (
    <section className="Youtube">

        <article className='orangeart'>
            <span>Take a look at our video</span>
            <h3>We have helped over 200 vulnerable communities worldwide</h3>
            <div>
                <button className='btn1'>Donate now</button>
                <button className='btn2'>About our charity</button>
            </div>
        </article>
        
        <article className='whiteart'>
            <iframe src="https://www.youtube.com/embed/xzWci9dYSBk" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div>
                <div>
                    <h6>The goal and mission behind</h6>
                    <p>Cursus metus aliquam eleifend mi in nulla posuere faucibus interdum posuere lorem ipsum dolor sit amet hendrerit dolor magna eget est lorem. Auctor urna nunc id cursus metus aliquam eleifend. Dictumst quisque sagittis purus sit amet volutpat consequa.</p>
                </div>
                <div>
                    <h6>How our charity got started</h6>
                    <p>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis et netus et malesuada fames urna nec tincidunt praesent semper feugiat metus aliquam eleifend mi in nulla posuere sollicitudin pretium aenean pharetra magna ac placerat.</p>
                </div>
            </div>
        </article>
    </section>
  );
}

export default Youtube;