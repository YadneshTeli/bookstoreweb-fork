import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json'
import Cards from './Cards';

function FreeBook(){
    const filterData = list.filter((data) => data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
    <>
        <div className='max-w-screen-2x1 container mx-auto md:px-10 px-9 mt-0 pt-0'>
            <h1 className=' font-semibold text-2xl pb-5 mt-0 pt-0'>Free Books</h1>
            <p className='pb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione excepturi consectetur exercitationem optio consequatur?
            </p>

            <div>
      <Slider {...settings}>
        {
            filterData.map((item)=>(
                <Cards item={item} key={item.id} />
            ))
        }
      </Slider>
            </div>
        </div>
    </>
  );
}

export default FreeBook;





