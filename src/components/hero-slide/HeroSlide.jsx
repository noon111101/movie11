import { useEffect, useState, useRef } from "react"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '../../api/apiConfig'
import { useNavigate } from "react-router-dom";
import './HeroSlide.scss';
import Modal,{ ModalContent } from "../modal/modal";


export function HeroSlide(props) {
      SwiperCore.use([Autoplay])
      const [movieItems, setMovieItems] = useState([])

      useEffect(() => {
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc')
                  .then((res) => res.json())
                  .then((data) => {
                        setMovieItems(data.results)

                  })
                  .catch((err) => console.log(err))
      }, [])
      return (
            <div className="hero-slide">
                  
                  <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={0}
                        slidesPerView={1}
                        // autoplay={{ delay: 3000 }}
                        // loop={true}
                  >
                        {movieItems.map((item, i) =>
                              <SwiperSlide key={i}>
                                    {({ isActive }) => (
                                          <HeroSildeItem
                                                className={`${isActive ? 'active' : ''}`}
                                                item={item}
                                          />
                                    )}
                              </SwiperSlide>
                        )}
                  </Swiper>
                  {     
                        movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
                  }
            </div>
      )
}

export function HeroSildeItem(props) {
      const item = props.item
      const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
      const navigative = useNavigate()
      function handle(){
            navigative("/movie/" + item.id)
      }
      function handleTrailer(){
            const modal = document.querySelector(`#modal_${item.id}`);
            fetch(`https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
            .then((res) => res.json())
            .then((data) => {
                  data.results.map((item)=>{
                        
                        console.log(item.key)
                        if(item.type === 'Trailer'){
                              console.log("------------------------"+item.key)
                              const videSrc = "https://www.youtube.com/embed/" + item.key
                              modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
                              modal.classList.add('active');
                        }
                  })
                  
            })
            .catch((err)=>console.log(err))
      }
      return (
            <div
                  className="hero-slide__item"
                  style=  {{ backgroundImage: `url(${background})` }}
            >
                  <div className="hero-slide__item__content container">
                        <div className="hero-slide__item__content__info">
                              <h2 className="title">{item.title}</h2>
                              <div className="overview">{item.overview}</div>
                              <div className="btns">
                                    <button className="btn-watch" onClick={handle}>Watch Now</button>
                                    <button className="btn-trailer" onClick={handleTrailer}>Trailer</button>
                              </div>
                        </div>
                        <div className="hero-slide__item__content__poster">
                              <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                        </div>
                  </div>

            </div>
            
      )
}


export function TrailerModal(props){
      const item = props.item;
      const iframeRef = useRef(null);
      const onClose = () => iframeRef.current.setAttribute('src', '');
  
      return (
          <Modal active={false} id={`modal_${item.id}`}>
              <ModalContent onClose={onClose}>
                  <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
              </ModalContent>
          </Modal>
      )
  }