import { useCallback } from "react";
import Slide1 from "../components/Slide1";
import "./Homepage.css";

const Homepage = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onFrameContainer2Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  const onMaterialSymbolssearchIconClick = useCallback(() => {
    // Please sync "Homepage" to the project
  }, []);

  return (
    <div className="homepage">
      <div className="buy-wrapper" onClick={onGroupContainerClick}>
        <div className="buy">
          <span className="buy1">Buy</span>
          <b className="b">{`  `}</b>
        </div>
      </div>
      <div className="rent-wrapper" onClick={onFrameContainerClick}>
        <div className="rent">Rent</div>
      </div>
      <div className="offers-wrapper" onClick={onFrameContainer1Click}>
        <div className="rent">Offers</div>
      </div>
      <div className="cart-wrapper" onClick={onFrameContainer2Click}>
        <div className="rent">Cart</div>
      </div>
      <div className="simple-iconsr-parent">
        <img className="simple-iconsr" alt="" src="/simpleiconsr.svg" />
        <div className="rentalnet">
          <span>Rental</span>
          <span className="net">.net</span>
        </div>
      </div>
      <div className="log-in">Log In</div>
      <div className="vector-parent" onClick={onFrameContainer3Click}>
        <img className="frame-child" alt="" src="/rectangle-5.svg" />
        <div className="sign-up-its">Sign Up- It’s Free</div>
      </div>
      <div className="unbox-endless-possibilities-container">
        <p className="unbox-endless-possibilities">
          Unbox Endless Possibilities,
        </p>
        <p className="unbox-endless-possibilities">{`Rent Today! `}</p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">&nbsp;</p>
        <p className="blank-line">{`Rental.net: Your gateway to a world of convenience. Explore, experience, and `}</p>
        <p className="blank-line">
          embrace the ease of renting everyday essentials effortlessly.
        </p>
      </div>
      <div className="homepage-child" />
      <img
        className="material-symbolssearch-icon"
        alt=""
        src="/materialsymbolssearch.svg"
        onClick={onMaterialSymbolssearchIconClick}
      />
      <i className="search">Search</i>
      <div className="homepage-item" />
      <div className="explore-categories">Explore Categories</div>
      <Slide1
        slidesBox="/slides-box@2x.png"
        arrowLeft="/arrow-left.svg"
        dotIndictaor1="/dot-indictaor--1.svg"
        dotIndictaor2="/dot-indictaor--2.svg"
        dotIndictaor3="/dot-indictaor--2.svg"
        dotIndictaor4="/dot-indictaor--2.svg"
        dotIndictaor5="/dot-indictaor--2.svg"
        arrowRight="/arrow-right.svg"
        slide1Width="89.25rem"
        slide1Height="35rem"
        slide1Position="absolute"
        slide1Top="86.88rem"
        slide1Left="0rem"
        arrowLeftIconWidth="1.5rem"
        arrowLeftIconHeight="1.5rem"
        dotIndictaor1Width="1rem"
        dotIndictaor1Height="1rem"
        dotIndictaor2Width="0.75rem"
        dotIndictaor2Height="0.75rem"
        dotIndictaor3Width="0.75rem"
        dotIndictaor3Height="0.75rem"
        dotIndictaor4Width="0.75rem"
        dotIndictaor4Height="0.75rem"
        dotIndictaor5Width="0.75rem"
        dotIndictaor5Height="0.75rem"
        arrowRightIconWidth="1.5rem"
        arrowRightIconHeight="1.5rem"
      />
      <div className="simple-iconsr-group">
        <img className="simple-iconsr" alt="" src="/simpleiconsr1.svg" />
        <div className="rentalnet">
          <span>Rental</span>
          <span className="net">.net</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
