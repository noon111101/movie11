import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiConfig from "../../api/apiConfig"
import SwiperCore, { Autoplay, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle'
import './credits.scss'

SwiperCore.use([Scrollbar]);
export function CastList(props) {
      const param = useParams()
      const [casts, setCasts] = useState([])

      useEffect(() => {
            fetch(`https://api.themoviedb.org/3/${param.category}/${param.id}/credits?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
                  .then((res) => res.json())
                  .then((data) =>
                        setCasts(data.cast)
                  )
                  .catch((err) => console.log(err))
      }, [])
      return (
            <div className={`cast_list  ${param.category}-${param.id}`}>
                  <h3>Cast</h3>
                  <Swiper
                        modules={[Autoplay]}
                        grabCursor={true}
                        spaceBetween={5}
                        slidesPerView={4}
                        scrollbar={{
                              draggable: true,
                              dragSize: 92,
                        }}
                  >
                        {casts.map((item) =>
                              <SwiperSlide>
                                    <img src={apiConfig.w500Image(item.profile_path)} />
                                    <p>{item.name}</p>
                              </SwiperSlide>
                        )}
                  </Swiper>
            </div>
      )
}