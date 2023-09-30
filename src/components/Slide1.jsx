import { useMemo } from "react";
import "./Slide1.css";

const Slide1 = ({
  slidesBox,
  arrowLeft,
  dotIndictaor1,
  dotIndictaor2,
  dotIndictaor3,
  dotIndictaor4,
  dotIndictaor5,
  arrowRight,
  slide1Width,
  slide1Height,
  slide1Position,
  slide1Top,
  slide1Left,
  arrowLeftIconWidth,
  arrowLeftIconHeight,
  dotIndictaor1Width,
  dotIndictaor1Height,
  dotIndictaor2Width,
  dotIndictaor2Height,
  dotIndictaor3Width,
  dotIndictaor3Height,
  dotIndictaor4Width,
  dotIndictaor4Height,
  dotIndictaor5Width,
  dotIndictaor5Height,
  arrowRightIconWidth,
  arrowRightIconHeight,
}) => {
  const slide1Style = useMemo(() => {
    return {
      width: slide1Width,
      height: slide1Height,
      position: slide1Position,
      top: slide1Top,
      left: slide1Left,
    };
  }, [slide1Width, slide1Height, slide1Position, slide1Top, slide1Left]);

  const arrowLeftIconStyle = useMemo(() => {
    return {
      width: arrowLeftIconWidth,
      height: arrowLeftIconHeight,
    };
  }, [arrowLeftIconWidth, arrowLeftIconHeight]);

  const dotIndictaor1Style = useMemo(() => {
    return {
      width: dotIndictaor1Width,
      height: dotIndictaor1Height,
    };
  }, [dotIndictaor1Width, dotIndictaor1Height]);

  const dotIndictaor2Style = useMemo(() => {
    return {
      width: dotIndictaor2Width,
      height: dotIndictaor2Height,
    };
  }, [dotIndictaor2Width, dotIndictaor2Height]);

  const dotIndictaor3Style = useMemo(() => {
    return {
      width: dotIndictaor3Width,
      height: dotIndictaor3Height,
    };
  }, [dotIndictaor3Width, dotIndictaor3Height]);

  const dotIndictaor4Style = useMemo(() => {
    return {
      width: dotIndictaor4Width,
      height: dotIndictaor4Height,
    };
  }, [dotIndictaor4Width, dotIndictaor4Height]);

  const dotIndictaor5Style = useMemo(() => {
    return {
      width: dotIndictaor5Width,
      height: dotIndictaor5Height,
    };
  }, [dotIndictaor5Width, dotIndictaor5Height]);

  const arrowRightIconStyle = useMemo(() => {
    return {
      width: arrowRightIconWidth,
      height: arrowRightIconHeight,
    };
  }, [arrowRightIconWidth, arrowRightIconHeight]);

  return (
    <div className="slide1" style={slide1Style}>
      <img className="slides-box-icon" alt="" src={slidesBox} />
      <div className="slides-navigation">
        <div className="click-area">
          <img
            className="arrow-left-icon"
            alt=""
            src={arrowLeft}
            style={arrowLeftIconStyle}
          />
        </div>
        <div className="slide-indicator">
          <img
            className="dot-indictaor-1"
            alt=""
            src={dotIndictaor1}
            style={dotIndictaor1Style}
          />
          <img
            className="dot-indictaor-2"
            alt=""
            src={dotIndictaor2}
            style={dotIndictaor2Style}
          />
          <img
            className="dot-indictaor-2"
            alt=""
            src={dotIndictaor3}
            style={dotIndictaor3Style}
          />
          <img
            className="dot-indictaor-2"
            alt=""
            src={dotIndictaor4}
            style={dotIndictaor4Style}
          />
          <img
            className="dot-indictaor-2"
            alt=""
            src={dotIndictaor5}
            style={dotIndictaor5Style}
          />
        </div>
        <div className="click-area">
          <img
            className="arrow-left-icon"
            alt=""
            src={arrowRight}
            style={arrowRightIconStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide1;
