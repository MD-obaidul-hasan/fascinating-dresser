import React from 'react';
import img1 from '../../../Image/Banner/256231-Megha-Anand-17991-orig.jpg';
import img2 from '../../../Image/Banner/268206-i-bZfWGhc-X5-orig.jpg';
import img3 from '../../../Image/Banner/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg'
import './Banner.css';
// import BannerItem from './BannerItem';

// const bannerData = [
//     {
//         image: img1,
//         prev: 3,
//         id: 1,
//         next:2
//     },
//     {
//         image: img2,
//         prev: 1,
//         id: 2,
//         next:3
//     },
//     {
//         image: img1,
//         prev: 2,
//         id: 3,
//         next:1
//     }
// ]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {/* {
                bannerData.map(slide => <BannerItem>
                    key={slide.id}
                    slide={slide}
                </BannerItem>)
            } */}
            {/* <BannerItem image={img1}></BannerItem> */}
  <div id="slide1" className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img src={img1} alt='' className="w-full rounded-xl" />
    </div>
   
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h1 className='text-6xl font-bold text-white'>
            Switable <br/>
            Price for Event<br/>
            Decoration
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
      <p className='text-xl text-white'>Event decoration is the first looking for the event good for mind.so nned nice decoration for event.</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
    <button className="btn btn-warning mr-5">Warning</button>
    <button className="btn btn-outline btn-warning">Warning</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 


  <div id="slide2" className="carousel-item relative w-full">
  <div className='carousel-img'>
    <img src={img2} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h1 className='text-6xl font-bold text-white'>
            Switable <br/>
            Price for Event<br/>
            Decoration
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
      <p className='text-xl text-white'>Event decoration is the first looking for the event good for mind.so nned nice decoration for event.</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
    <button className="btn btn-warning mr-5">Warning</button>
    <button className="btn btn-outline btn-warning">Warning</button>
    </div>
    {/* <img src={img2} alt='' className="w-full" /> */}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
  <div className='carousel-img'>
    <img src={img3} alt='' className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
      <h1 className='text-6xl font-bold text-white'>
            Switable <br/>
            Price for Event<br/>
            Decoration
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
      <p className='text-xl text-white'>Event decoration is the first looking for the event good for mind.so nned nice decoration for event.</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24  top-3/4">
    <button className="btn btn-warning mr-5">Warning</button>
    <button className="btn btn-outline btn-warning">Warning</button>
    </div>
    {/* <img src={img3} alt='' className="w-full" /> */}
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 


  {/* <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
    );
};

export default Banner;