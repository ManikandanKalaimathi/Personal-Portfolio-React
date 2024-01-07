import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
              "XXX with [Your Name] was an absolute game-changer for our brand. Their creative vision and attention to detail elevated our marketing campaign, resulting in a 30% increase in customer engagement.",
          },
          {
            img: profilePic2,
            review:
              "XXX is a true professional. Their ability to grasp complex concepts and transform them into visually stunning designs is unparalleled. They took our ideas and turned them into a cohesive, impactful brand identity.",
          },
          {
            img: profilePic3,
            review:
              "XXX doesn't just deliver designs; they deliver experiences. Their knack for understanding our audience and translating that into user-friendly interfaces was impressive.",
          },
          {
            img: profilePic4,
            review:
              "I'm thrilled with the results XXX achieved for our social media campaign. They have an innate ability to create content that resonates with our audience.",
          },

    ];
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial