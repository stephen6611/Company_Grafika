import React from "react";
import "../styles/faq.css";
import Slider from "react-slick";
// import ava01 from "../../assets/images/video.png";

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h2>
            <b>FAQ</b>
          </h2>
          <h6 className="subtitle">Pertanyaan yang sering diajukan</h6>
          <div className="slider__wrapper">
            <Slider {...settings}>
              <div className="slider__item">
                <p className="description">
                  Perawatan dilakukan ada yg besifat harian mingguan dan
                  bulanan. Kalau yg harian di antaranya kalau mesin yg sudah
                  memakai cheeler atau pendingin air. Sebaik nya dilakukan
                  penggantian air tiap hari. Untuk menjaga kualitas cetakan.
                  Paling tidak menambah air karena sudah dipakai seharian untuk
                  produksi. Jadi pasti berkurang. Kebersihan mesin menjadi kunci
                  utama kualitas hasil cetakan.
                </p>

                <div className="customer__details">
                  <div>
                    <h5 className="customer__name">
                      Berapa lama sebaiknya dilakukan perawatan mesin cetak?
                    </h5>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
