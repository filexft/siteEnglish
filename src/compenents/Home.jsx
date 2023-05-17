
import '../Styles/home.css'
import hero from '../assets/hero.jpg';

function Home() {
  return (
    <div className='home-cont'>
      <section className='vid-cont'>
          <div className="void">

          </div>
            <div className="cta-cont">
                  <p>click for more info</p>
                  <button className='cta'>
                  <a href="https://www.betterinternetforkids.eu/sic/france"> #NoHarassement</a>
                  </button>
            </div>
      </section>
      <section>
          <div className="img">
              <img src={hero} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
      <section>
          <div className="img">
              <img src={hero} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
      <section>
          <div className="img">
              <img src={hero} alt="" />
          </div>
          <div className="txt">
                <p>Le harcèlement sexuel dans les lieux publics est le principal problème rencontré par les femmes et les jeunes filles dans le monde.

              </p>
          </div>
      </section>
    </div>
  );
}

export default Home;


//  <video className="hero" autoPlay muted loop playsInline>
//               <source src="#" type="video/mp4" />
//                Sorry, your browser doesn't support videos.
//           </video>