import { useEffect, useState } from 'react'
import apiConfig from '../../api/apiConfig'
import { Swiper, SwiperSlide } from 'swiper/react';
import './movie-list.scss'
import { MovieCard } from '../movie-card/MovieCard';
export function MovieList(props) {

      const [movieList, setMovieList] = useState([])

      useEffect(() => {
            fetch(`${apiConfig.baseUrl}${props.movieType === 'trending' ? props.movieType + '/' + props.category : props.category + '/' + props.movieType}${props.movieType === 'trending' ? '/day' : ''}${apiConfig.apiKey}`)
                  .then((res) => res.json())
                  .then((data) => {
                        setMovieList(data.results)
                  })
                  .catch((err) => console.log(err))
      }, [])

      return (
            <div className={`movies-list ${props.movieType}-${props.category}`}>

                  <Swiper
                        grabCursor={true}
                        spaceBetween={10}
                        slidesPerView={5}
                  >
                        {
                              movieList.map((item) =>
                                    <SwiperSlide key={item.id}>
                                          <MovieCard
                                                item={item}
                                                category={props.category}
                                                className={item.title}
                                                image={apiConfig.w500Image(item.poster_path)}
                                                title={props.category === "movie" ? item.title : item.name}
                                          ></MovieCard>
                                    </SwiperSlide>
                              )
                        }
                  </Swiper>
            </div>
      )
}