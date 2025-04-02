import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Links = () => {
  const links = [
    {
      name: "Government of Maharashtra",
      image: "https://mahaforest.gov.in/assets/images/weblink1.png",
      url: "https://maharashtra.gov.in"
    },
    {
      name: "India Government Portal",
      image: "https://mahaforest.gov.in/assets/images/weblink2.png",
      url: "https://india.gov.in"
    },
    {
      name: "My Gov India",
      image: "https://mahaforest.gov.in/assets/images/weblink3.png",
      url: "https://mygov.in"
    },
    {
      name: "Digital India",
      image: "https://mahaforest.gov.in/assets/images/weblink4.png",
      url: "https://mahaforest.gov.in/assets/images/weblink4.png"
    },
    {
      name: "Aaple Sarkar",
      image: "https://mahaforest.gov.in/assets/images/weblink5.png",
      url: "https://mahaforest.gov.in/assets/images/weblink5.png"
    },
 
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full py-8">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {links.map((link, index) => (
            <div key={index} className="flex  justify-center">
              <a 
                href={link.url} 
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                aria-label={link.name}
              >
                <img 
                  src={link.image} 
                  alt={link.name} 
                  className="h-12 md:h-16 w-auto object-contain" 
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Links;
