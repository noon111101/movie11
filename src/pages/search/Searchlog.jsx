import { MovieCard } from "../../components/movie-card/MovieCard";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { useEffect, useState } from "react";
import './search_log.scss'

function Searchlog() {
      const param = useParams()
      const [items, setItems] = useState([])
      useEffect(() => {
            fetch(`https://api.themoviedb.org/3/search/multi?query=${param.keyword}&api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
                  .then((res) => res.json())
                  .then((data) =>
                        setItems(data.results)
                  )
                  .catch((err) => console.log(err))
      }, [param.keyword])

      return (
            <div className='container'>
                  <div className="searchlog">
                        {
                              items.map((item) =>
                                    <MovieCard
                                          item={item}
                                          category={item.media_type}
                                          key={item.id}
                                          classname={item.title}
                                          image={apiConfig.w500Image(item.poster_path)}
                                          title={item.media_type === "movie" ? item.title : item.name}
                                    ></MovieCard>
                              )}
                  </div>
            </div>
      );
}

export default Searchlog;
