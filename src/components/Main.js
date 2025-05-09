"use client"
import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";





function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slidebtn right" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slidebtn left" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}












function Main(props) { 

  

  var Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="f1">
        <div className="s1">
          <div>
            <h4>MEGA Store</h4>
            <h1>Discover your personality</h1>
            <p>New Clothes , New Passion</p>
            <Link href='/Store' className="mnn">
            <button >
              Shop Now
            </button>
            </Link>
          </div>
        </div>
        {/*  <div className="s2">
                    <div>
                        <h4>MEGA Store</h4>
                        <h1>Discover your personality</h1>
                        <p>New Clothes , New Passion</p>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="s3">
                    <div>
                        <h4>MEGA Store</h4>
                        <h1>Discover your personality</h1>
                        <p>New Clothes , New Passion</p>
                        <button>Shop Now</button>
                    </div>
                </div> */}
      </div>
      <div className="sec2">
        <h1 className="h1">FEATURED PRODUCTS</h1>
        <div className="line"></div>
        <div className="girdd">
          {props.pro.message.feature.map((item) => (
              <Card key={item.id}
                image={item.img}
                title={item.name}
                price={item.price}
                item={item}
              />
            )
          )}
        </div>
        <div className="box">
          <div className="bus">
            <div className="bushed">
              <h5>NEW ARRIVAL</h5>
              <h1 style={{ fontSize: "30px" }}>
                Bussiness
                <br /> Collection
              </h1>
            </div>
          </div>
          <div className="wed">
            <div className="wedhed">
              <h5>NEW ARRIVAL</h5>
              <h1 style={{ fontSize: "30px" }}>
                Weedings <br /> Collection
              </h1>
            </div>
          </div>
        </div>
        <h1 className="h1">NEW PRODUCTS</h1>
        <div className="line"></div>
        <div className="slider">
          <Slider {...Settings}>
            {props.pro.message.New.map((item) => (
              <Card key={item.id}
                image={item.img}
                title={item.name}
                price={item.price}
                item={item}
              />
            ))}
          </Slider>
        </div>

        <div className="sec3">
          <h1 className="h1">What clients Says</h1>
          <div className="line"></div>
          <div className="clients">
            <div className="bos">
              <div className="firstbox">
                <div className="im">
                  <img
                    src="https://demo4techies.com/prestashop/shopkart-lite/img/cms/testimonial-img-1.jpg"
                    alt="alt"
                  />
                </div>
                <div className="pp">
                  <h1>John Doe</h1>
                  <span>Web designer</span>
                </div>
              </div>
              <div className="secbox">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam possimus obcaecati assumenda molestias. Sit, officia
                  sequi. Magni aut aperiam laborum modi facere commodi illum
                  fuga pariatur est. Nisi, dolorum magni.
                </p>
              </div>
            </div>
            <div className="bos">
              <div className="firstbox">
                <div className="im">
                  <img
                    src="https://demo4techies.com/prestashop/shopkart-lite/img/cms/testimonial-img-3.jpg"
                    alt="alt"
                  />
                </div>
                <div className="pp">
                  <h1>Alex Carter</h1>
                  <span>Customer</span>
                </div>
              </div>
              <div className="secbox">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam possimus obcaecati assumenda molestias. Sit, officia
                  sequi. Magni aut aperiam laborum modi facere commodi illum
                  fuga pariatur est. Nisi, dolorum magni.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="h1">BRANDS</h1>
        <div className="line"></div>
        <div className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Brioni_new_logo.png"
            alt="ald"
          />
          <img
            src="https://logowik.com/content/uploads/images/brooks-brothers6285.logowik.com.webp"
            alt="ald"
          />
          <img
            src="https://i.pinimg.com/736x/f8/48/90/f848909574ad6fd94d891614176d93b4.jpg"
            alt="ald"
          />
          <img
            src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6OcUmCd6eBUZD0OQ6YIhzZITs83ftN9W_TJji5DflyKKyFcDR"
            alt="ald"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Logo_Burberry_02.svg"
            alt="ald"
          />
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTATbDul2xk-GHq5nfNoRE-5VawRN8wVCjyiEAU_u65NOABl-oz"
            alt="ald"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;