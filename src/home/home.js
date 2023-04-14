import { faApple, faFacebook, faGoogle, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight, faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faAngleDoubleRight, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import AppHeader from "../common/components/app-header";
import "./home.scss";

const GradientBorderButton = (props) => {
  return <button className="button-border-gradient relative signin-button">
          <FontAwesomeIcon icon={props.icon} size={'lg'}></FontAwesomeIcon>
            {props.text}
        </button>
}

const Home = () => {

  const [isValid, setIsValid] = useState(null);
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);

  const validate = () => {
    if (userId && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log(userId, password, isValid);
  }

  return (
    <div className="flex-box-start full-width flex-col space-even">
        <AppHeader/>

        <div className="body-contents flex-box-center v-center full-width flex-col">
          
          <div className="big-title">Login to Get Started</div>
          <div className="dark-gray text-center sub-text">
            Start your journey with us to the awesome!
            Choose from a variety of products and services as per your need
          </div>


          {/* 2 col grid */}
          <div className="action-contents">

            <div className="flex-box-start flex-col">
              <input type='text' placeholder="enter your email or user id" onBlur={(e) => setUserId(e.target.value)}/>
              <input type='password' placeholder="enter your pin" onBlur={(e) => setPassword(e.target.value)}/>
              <button className="button-gradient relative login-button" onClick={() => validate()}>Proceed to Login
                <FontAwesomeIcon icon={faAngleRight} size={'lg'}></FontAwesomeIcon>
              </button>
              <a className="underline small light text-right">Forgot Password?</a>
            </div>

            <div className="flex-box-center v-center">
              or
            </div>
            
            <div className="flex-box-start flex-col">
              <GradientBorderButton icon={faGoogle} text="Sign in with Google"/>
              <GradientBorderButton icon={faFacebook} text="Sign in with Facebook"/>
              <GradientBorderButton icon={faApple} text="Sign in with Apple"/>
            </div>
          </div>
        </div>


        <div className="footer-contents flex-box-start v-baseline full-width">
          <a className="small dark-gray">Privacy Policy</a>
          <div className="flex-box-center social-icons">
            <FontAwesomeIcon className="enable-hover" icon={faFacebook} size={'lg'} color={'#2a8978'}/>
            <FontAwesomeIcon className="enable-hover" icon={faInstagram} size={'lg'} color={'#2a8978'}/>
            <FontAwesomeIcon className="enable-hover" icon={faTwitter} size={'lg'} color={'#2a8978'}/>
          </div>
          <div className="small v-baseline dark-gray flex-box-end">Copyright
            <FontAwesomeIcon icon={faCopyright} size={'sm'}/>Bloom Marketing 2023</div>
        </div>


    </div>
  );
}

export default Home;
