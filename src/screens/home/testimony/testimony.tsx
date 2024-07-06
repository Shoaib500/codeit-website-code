import React from "react";
import "./testimony.scss";
import star from "../../../assets/icons/star-solid.svg";
import client1 from "../../../assets/testimony-img/red-logo.webp";
import client2 from "../../../assets/testimony-img/Logo-07.webp";
import client3 from "../../../assets/testimony-img/TimeOut_Logo-01-1.png";
import client4 from "../../../assets/testimony-img/linda-paradise-logo.png";
import client5 from "../../../assets/testimony-img/tvgconsultancy-new.png";

type TestimonyProps = {};

type Testimonial = {
  img: string;
  name: string;
  description: string;
};

const Testimony: React.FC<TestimonyProps> = () => {
  const testimonials: Testimonial[] = [
    {
      img: client1,
      name: "ABH",
      description:
        "Mighty Warner's web development services exceeded all expectations. Their team of skilled developers crafted a stunning and user-friendly website for us. From start to finish, the process was smooth and efficient.",
    },
    {
      img: client2,
      name: "Classic Educational",
      description:
        "Highly impressed with their PPC and SMM services! They've significantly enhanced our online visibility and brand awareness. The outstanding results speak volumes, with a remarkable boost in website traffic .",
    },
    {
      img: client3,
      name: "Mr. Sam(Time-out)",
      description:
        "My Instagram page had just a few followers and engagements when I approached Mighty Warner's social media team. Today, I have gained ample followers and leads from Instagram with their efforts.",
    },
    {
      img: client4,
      name: "Linda Paradis",
      description:
        "I am glad that I connected with the experts at Mighty Warner to develop a website for my Tattoo removal academy. All the layouts and designs are just amazing.",
    },
    {
      img: client5,
      name: "Mr. Aman(TVG)",
      description:
        "The social media experts at Mighty Warner are really trendy when it comes to posts. I just loved the way they planned the calendar for our Instagram page.",
    },
  ];

  return (
    <div className="testimony-container">
      <div className="testimony-top title">
        <div className="testimony-title">TAKE OUR CLIENTS' WORD FOR IT</div>
        <div className="testimony-sub-title">
          Don't just listen to what we say. Listen to those who have put their
          trust in us and have plenty of good experiences.
        </div>
      </div>

      <div className="testimony-mid slider">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card">
            <div className="testimonial-img">
              <img className="client-img" src={testimonial.img} alt="" />
            </div>

            <div className="testimonial-name">{testimonial.name}</div>

            <div className="rating">
              <div className="star">
                <img className="rating-star" src={star} alt="" />
                <img className="rating-star" src={star} alt="" />
                <img className="rating-star" src={star} alt="" />
                <img className="rating-star" src={star} alt="" />
                <img className="rating-star" src={star} alt="" />
              </div>
              <span>❝</span>
            </div>

            <div className="testimonial-description">
              {testimonial.description}
            </div>
          </div>
        ))}
      </div>

      <div className="testimony-bottom dots">
      <div className="owl-dots">
        <button role="button" className="owl-dot active">
          <span></span>
        </button>

        <button role="button" className="owl-dot">
          <span></span>
        </button>

        <button role="button" className="owl-dot">
          <span></span>
        </button>

        <button role="button" className="owl-dot">
          <span></span>
        </button>

        <button role="button" className="owl-dot">
          <span></span>
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default Testimony;
