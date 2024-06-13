import React, { useRef, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const Testimonials = () => {
  const data = [
    {
      img: "img/test1.jpg",
      name: "Serena Mitchell",
      remark: "Great",
     
      comment:
        "The food stall discovery on their platform is a game-changer. I've discovered new favorite spots right in my neighborhood!",
    },
    {
      img: "img/test2.jpg",
      name: "Julian Bennett",
      remark: "Great",
     
      comment:
        "The event discovery service helped me find local activities that perfectly matched my interests. It's so convenient and fun!",
    },
    {
      img: "img/test3.jpg",
      name: "Camila Rodriguez",
      remark: "Great",
     
      comment:
        "Their Profile Creation service made my online presence shine! Highly recommended.",
    },
    {
      img: "img/test4.jpg",
      name: "Victor Nguyen",
      remark: "Great",
     
      comment:
        "Their service is perfect for anyone looking to explore local events and festivals. It's been a real find!",
    },
    {
      img: "img/test5.jpg",
      name: "Ethan Carter",
      remark: "Great",
     
      comment:
        "Using their platform for carpooling has connected me with friendly neighbors and reduced my commute costs.",
    },
    {
      img: "img/test6.jpg",
      name: "Olivia Martinez",
      remark: "Great",
     
      comment:
        "Finding nearby food stalls through their platform has been a game-changer for my lunch breaks.",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          // centerMode :false
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          touchMove: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col justify-center lg:px-32 px-10 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Testimonials
          </h1>
          <p className=" mt-2 text-center lg:text-start">
          Connecting neighbors through innovative services: from standout profiles to local event discovery and more.
          </p>
        </div>
      </div>
      <div className=" mt-5 ">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="flex card flex-col h-[320px]  md:h-[280px] text-black cursor-pointer shadow-lg hover:shadow-[2px_1px_15px_3px_rgba(0,0,0,0.1)] hover:scale-105 transition ease-out duration-700"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className="mx-auto h-14 w-14 object-cover  "
                  loading="lazy"
                />
              </div>

              <div className="my-auto flex flex-col justify-center items-center">
                <h1 className=" font-semibold  textg-md  pt-4 ">{e.name}</h1>
                <h3 className=" pt-2">{e.remark}</h3>
                <p className="p-2 text-center text-xs ">{e.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
