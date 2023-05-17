import aboutimg from '../assets/about.png';

import '../Styles/about.css';

function About() {
  return (
      <div className='about-cont'>
      <section className='about'>
          <div className="void">

          </div>
            <div className="cta-cont">
                  <p>More info about US</p>
                  <button className='cta'>
                  <a href="https://www.betterinternetforkids.eu/sic/france">Who We Are?</a>
                  </button>
            </div>
      </section>
      <section>
          <div className="img">
              <img src={aboutimg} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
      <section>
          <div className="img">
              <img src={aboutimg} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
      <section>
          <div className="img">
              <img src={aboutimg} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
    </div>
  );
}

export default About;