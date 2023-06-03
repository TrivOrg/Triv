import './About.css'

import About1 from '../../assets/About_1.svg'
import About2 from '../../assets/About_2.svg'
import About3 from '../../assets/About_3.svg'

const About = () => {

    return (
        <div className="container">

      <div className="about">

        <h2 className="t2">ABOUT</h2>
        <div className="row">
          <div className="column">
            <h3 className="t3">
              TRIV LETS YOU CREATE QUIZZES YOUR OWN QUIZZES IN YOUR OWN ACCOUNT, VIEW THEM AND ALSO ANSWER THEM. TRIV LETS YOU CREATE QUIZZES YOUR OWN QUIZZES IN YOUR OWN ACCOUNT, VIEW THEM AND ALSO ANSWER THEM.
            </h3>
          </div>
          <div className="column">
            <img src={About1} alt="#Image Not Found" class="abt-img" />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <img src={About2} alt="#Image Not Found" class="abt-img" />
          </div>
          <div className="column">
            <h3 className="t3">
              TRIV LETS YOU REVIEW QUIZZES THAT ARE AVAILABLE FOR ALL USERS. TRIV LETS YOU REVIEW QUIZZES THAT ARE AVAILABLE FOR ALL USERS. TRIV LETS YOU REVIEW QUIZZES THAT ARE AVAILABLE FOR ALL USERS.
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <h3 className="t3">
              TRIV LETS YOU PLAY WITH YOUR OWN QUIZZES THAT MIGHT HELP YOU DURING YOUR EXAM PERIOD OR BEFORE GOING FOR AN INTERVIEW. TRIV LETS YOU PLAY WITH YOUR OWN QUIZZES THAT MIGHT HELP YOU DURING YOUR EXAM PERIOD OR BEFORE GOING FOR AN INTERVIEW.
            </h3>
          </div>
          <div className="column">
            <img src={About3} alt="#Image Not Found" className="abt-img" />
          </div>
        </div>
      </div>
    </div>
)
}

export default About