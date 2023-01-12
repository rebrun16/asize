import Slider from "react-slick";

import "./slick.css";
import './slick-theme.css'

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  return (
    <>
      <div className="slider">
        <h1>Testimonials</h1>
        <h2>Excepteur sint occaecat cupidatat non proident</h2>
        <Slider {...settings}>
          <div className="card">
            <h3 className="title">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Dianne Russell</div>
                <div className="subtitle">Marketing</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Dianne Russell</div>
                <div className="subtitle">Marketing</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Robert Johnson</div>
                <div className="subtitle">Graphic Designer</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Dianne Russell</div>
                <div className="subtitle">Marketing</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Dianne Russell</div>
                <div className="subtitle">Marketing</div>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.</h3>
            <div className="bottom">
              <div className="left">
                <img src="/img/avatar.png" alt="avatar" />
              </div>
              <div className="right">
                <div className="name">Dianne Russell</div>
                <div className="subtitle">Marketing</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  )
}