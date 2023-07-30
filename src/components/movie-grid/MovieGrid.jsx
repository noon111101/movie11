import { useEffect, useRef, useState } from 'react'
import { MovieCard } from '../movie-card/MovieCard';
import apiConfig from '../../api/apiConfig';
import './movie-grid.scss'
export function MovieGrid(props) {
      const [movies, setMovies] = useState([])
      const [page, setPage] = useState(1)
      const [totalPage, setTotalPage] = useState(0)
      const fetchData = (p) => {
            fetch(`https://api.themoviedb.org/3/${props.category}/popular?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc&page=${p}`)
                  .then((res) => res.json())
                  .then((data) => {
                        setMovies(data.results)
                        setTotalPage(data.total_pages)
                  }
                  )
                  .catch((err) => console.log(err))
      }
      const clickNext = () => {
            if (page >= totalPage) {
                  fetchData(1)
            } else {
                  setPage(page + 1)
                  fetchData(page + 1)
            }
      }
      const clickPrev = () => {
            if (page <= 1) {
                  fetchData(1)
            } else {
                  setPage(page - 1)
                  fetchData(page - 1)
            }
      }
      useEffect(() => {
            fetchData(page)
      }, [props.category])

      return (
            <div className='container mb-3'>
                  <div className='movie-grid'>
                        {
                              movies.map((item) =>
                                    <MovieCard
                                          item={item}
                                          category={props.category}
                                          key={item.id}
                                          classname={item.title}
                                          image={apiConfig.w500Image(item.poster_path)}
                                          title={props.category === "movie" ? item.title : item.name}
                                    ></MovieCard>
                              )}
                  </div>
                  <div className='pagination '>
                        <button onClick={clickPrev}>Prev</button>
                        <span className='numberpage'>{page}</span>
                        <button onClick={clickNext}>Next</button>
                  </div>
            </div>
      )
}