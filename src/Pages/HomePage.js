import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import  TRAVEL  from '../Assets/Images/pexels-1.jpg'
import Goa from '../Assets/Images/pexels-mat-kedzia-1096222-2091018.jpg'
import Darziling from '../Assets/Images/pexels-senuscape-728360-1658967.jpg'
import Ooti from '../Assets/Images/pexels-souvenirpixels-417074.jpg'
import Kochi from '../Assets/Images/pexels-japy-929032.jpg'
import Map from '../Assets/Images/pexels-3.jpg'
import cycle from '../Assets/Images/cycle.gif'
import location from '../Assets/Images/location.gif'
import camera from '../Assets/Images/camera.gif'
import campfire from '../Assets/Images/campfire.gif'
import ballon from '../Assets/Images/hot-air-balloon.gif'
import sign from '../Assets/Images/signpost.gif'
import love from '../Assets/Images/love.gif'
import NewCard from '../Components/NewCard'
import Testimonial from '../Components/Testimonial';
import Artical from '../Components/Artical';
const HomePage = () => {
  return (
    <>
    
    <div className="flex flex-wrap">
    <div className="w-full sm:w-8/12 mb-10">
      <div className="container mx-auto h-full sm:p-10">
        <nav className="flex px-4 justify-between items-center">
          
          <div>
            <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
          </div>
        </nav>
        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
          <div className="w-full">
            <h1 className="text-4xl lg:text-6xl font-bold hedline">Discover Your Next <span className="text-green-700">Adventure...</span> </h1>
            <div className="w-20 h-2 bg-green-700 my-4"></div>
            <p className="font-semibold font-serif italic text-xl mb-2">Unleash your wanderlust with our curated travel experiences. From breathtaking destinations to personalized itineraries, we’re here to make your journey unforgettable. Where will your next adventure take you?</p>
            <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>

            <img src={cycle} className='icon1' />
            <img src={location} className='icon2' />
            <img src={camera} className='icon3' />
            <img src={campfire} className='icon4' />
            <img src={sign} className='icon5' />
            <img src={ballon} className='icon6' />
            <img src={love} className='icon7' />
          </div>
        </header>
      </div>
    </div>
    <img src={TRAVEL} alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
  </div>



{/* CARD */}

<div className="mt-4 px-4">
 <center>
 <h2 className='font-semibold font-serif text-3xl mb-2'>Top Place to Discover</h2>
 </center>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <NewCard
              imageSrc={Kochi}
              title="Kochi"
              headline="Where Tradition Meets the Sea"
              description="A historic port city, Kochi blends cultural heritage with modernity, featuring iconic Chinese fishing nets, backwaters, and vibrant art scenes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Ooti}
              title="Ooti"
              headline="Queen of the Hills"
              description="Known as the 'Queen of the Hills,' Ooty offers scenic landscapes, tranquil lakes, and sprawling tea plantations, perfect for a serene getaway."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Darziling}
              title="Darziling"
              headline="Tea Gardens and Tranquility"
              description="Nestled in the Himalayan foothills, Darjeeling is famed for its tea gardens, breathtaking views of Kanchenjunga, and charming toy train rides."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Goa}
              title="Goa"
              headline="Sun, Sand, and Serenity"
              description="Famous for its golden beaches, vibrant nightlife, and Portuguese heritage, Goa is the perfect destination for sun lovers and party enthusiasts."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Kochi}
              title="Kochi"
              headline="Where Tradition Meets the Sea"
              description="A historic port city, Kochi blends cultural heritage with modernity, featuring iconic Chinese fishing nets, backwaters, and vibrant art scenes."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Ooti}
              title="Ooti"
              headline="Queen of the Hills"
              description="Known as the 'Queen of the Hills,' Ooty offers scenic landscapes, tranquil lakes, and sprawling tea plantations, perfect for a serene getaway."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Darziling}
              title="Darziling"
              headline="Tea Gardens and Tranquility"
              description="Nestled in the Himalayan foothills, Darjeeling is famed for its tea gardens, breathtaking views of Kanchenjunga, and charming toy train rides."
            />
          </SwiperSlide>
          <SwiperSlide>
            <NewCard
              imageSrc={Goa}
              title="Goa"
              headline="Sun, Sand, and Serenity"
              description="Famous for its golden beaches, vibrant nightlife, and Portuguese heritage, Goa is the perfect destination for sun lovers and party enthusiasts."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    

      <div className="mt-4 px-4">
        <center>
        <h2 className='font-semibold font-serif text-3xl mb-2'>What our Client say About Us...</h2>
        </center>

          

          <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
              <Testimonial />
          </SwiperSlide>

          <SwiperSlide>
              <Testimonial />
          </SwiperSlide>


          <SwiperSlide>
              <Testimonial />
          </SwiperSlide>


          <SwiperSlide>
              <Testimonial />
          </SwiperSlide>
        </Swiper>

      </div>



      <div className="mt-4 px-4">
        <center>
        <h2 className='font-semibold font-serif text-3xl mb-2'>What our Client say About Us...</h2>
        </center>
          <div className='flex justify-between space-x-4 p-4'>
            <div className='w-full '>   
              <Artical 
              ArticalImg={Goa}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
              <div class="w-full m-3 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                  <img src={Map} className='artical-img' />
              </div>
              <Artical 
              ArticalImg={Ooti}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
            </div>
            <div className='w-full'>
            <Artical 
              ArticalImg={Darziling}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              /><Artical 
              ArticalImg={Kochi}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
               <div class="w-full m-3 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                  <img src={Map} className='artical-img' />
              </div>
            </div>
            <div className='w-full'>
            <Artical 
              ArticalImg={Ooti}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
               <div class="w-full m-3 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                  <img src={Map} className='artical-img' />
              </div>
              <Artical 
              ArticalImg={Darziling}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
            </div>
            <div className='w-full'>
            <div class="w-full m-3 max-w-lg overflow-hidden rounded-lg shadow-lg sm:flex">
                  <img src={Map} className='artical-img' />
              </div>
              <Artical 
              ArticalImg={Kochi}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
              <Artical 
              ArticalImg={Goa}
              ArticalTitle="Sun, Sand, and Serenity"
              ArticalDiscription="Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud."
              />
            </div>
          </div>
      </div>
    </>
  )                     
}

export default HomePage
