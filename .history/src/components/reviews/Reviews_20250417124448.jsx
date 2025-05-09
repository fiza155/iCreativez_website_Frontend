import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Reviews.css";
import Image1 from "../../assets/Testimonials/Drobt.png";
import Image2 from "../../assets/Testimonials/DrSahibjan.png";
import Image3 from "../../assets/Testimonials/TImage3.png";
import Image4 from "../../assets/Testimonials/WhetCloud.png";
import Image5 from "../../assets/Testimonials/TaqdirAli.png";

const ReviewsTestimonial = () => {
  const teamData = [
    {
      name: "Dr",
      lastName: "OBT",
      role: "CEO, Halcyon Clinic London",
      img: Image1,
      text: `We approached ICreativez Technologies for a website redesign, and
        they transformed our vision into reality. Their designs are visually
        appealing and optimized for a great user experience.`,
    },
    {
      name: "Dr. Sahibjan",
      lastName: "Badar",
      role: "Program Coordinator, AAP, Health",
      img: Image2,
      text: `The Icreativez management and team are highly cooperative and have the
      high level of experience & skill set to address our rapidly changing
      requirements. No doubt iCreativez is among the best IT outsourcing
      companies in the world. I would like to say that it is awesome company.`,
    },
    {
      name: "Syed Reaz ",
      lastName: "Ashraf",
      role: "Founder & CEO, Whet Cloud LLC",
      img: Image4,
      text: "ICreativez Technologies’s SEO services are phenomenal. Our website’s traffic doubled in three months, and we are now ranking on the first page for several competitive keywords.",
    },
    {
      name: "Ton",
      lastName: "Groot",
      role: "Founder bij Pluukz & Kuukz",
      img: Image3,
      text: `ICreativez Technologies exceeded our expectations with their custom
        software development services. Their team delivered a robust and
        scalable solution that streamlined our business processes. Highly
        professional and efficient!`,
    },
    {
      name: "Taqdir",
      lastName: "Ali",
      role: "(Ph.D), Project Manager, UC Lab Kyung Hee University",
      img: Image5,
      text: `The solution relied on provided research from the internal team and is now deployed at a collaborative hospital. Icreativez Technologies demonstrated impressive project management skills, achieving deadlines on time. That said, communication can always be a bit better.
`,
    },

    {
      name: "Another",
      lastName: "Person",
      role: "Another Role",
      img: "https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg",
      text: "",
    },
    {
      name: "Another",
      lastName: "Person",
      role: "Another Role",
      img: "https://codingyaar.com/wp-content/uploads/headshot-5-scaled.jpg",
      text: "",
    },
  ];

  return (
    <div className="testimonial-container custom ">
      <h4 className=" ps-md-5  ps-sm-5   ms-4 text-start">Testimonials</h4>
      <div className="testimonial-header container">
        <h2 className="">Our Global Clients</h2>
        <div className="testimonial-nav">
          <div className="custom-swiper-button-prev hover-effect">
            <BsArrowLeft size={24} />
          </div>
          <div className="custom-swiper-button-next hover-effect">
            <BsArrowRight size={24} />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        centeredSlides={true}
        // initialSlide={Math.floor(teamData.length / 1)}
        spaceBetween={10}
        slidesPerView={3.5}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="testimonial-swiper"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card">
              <img src={member.img} alt={member.name} />
              <h3>
                {member.name} <span>{member.lastName}</span>
              </h3>
              <p>{member.role}</p>

              {member.text && (
                <div className="hover-text">
                  <span>"{member.text}"</span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsTestimonial;
