import './Hero.css'
import learn from '../../assets/learn.svg'

const Hero = () => {
    return (
        <div className="hero-container">
          <div className="hero">
            {/* Your hero section content goes here */}
            <div className="hero-top-text">
              <p>Play, Create, Rate Quizzess in Areas You need proper understanding by practising</p>
              <p className="sub-text">Practices Makes Perfect</p>
              <div className="get-started">
                <input type="text" placeholder='johndoe@gmail.com' />
                <button className="get-started-button"> Get Started</button>
              </div>
            </div>
            <div className="right-image">
              <img src={learn} alt="girl-studying" />
            </div>
          </div>
        </div>
      )
}

export default Hero