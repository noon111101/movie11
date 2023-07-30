import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MovieCard } from "../../components/movie-card/MovieCard";
import apiConfig from "../../api/apiConfig";

export function Similar(props) {
      const [similar, setSimilar] = useState([])
      const param = useParams()
      useEffect(() => {
            fetch(`https://api.themoviedb.org/3/${param.category}/${param.id}/similar?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
                  .then((res) => res.json())
                  .then((data) =>
                  setSimilar(data.results)
                  )
                  .catch((err) => console.log(err))
      }, [])
      return (
            <div className="similar">
                  <h2>Similar</h2>
                  <Swiper
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={5}
                  >
                  {
                        similar.map((item) =>
                              <SwiperSlide key={item.id}>
                                    <MovieCard
                                          item={item}
                                          category={param.category}
                                          className={item.title}
                                          image={apiConfig.w500Image(item.poster_path)}
                                          title={param.category === "movie" ? item.title : item.name}
                                    ></MovieCard>
                              </SwiperSlide>
                        )
                  }
                  </Swiper>
            </div>
      )
}