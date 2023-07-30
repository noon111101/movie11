import { useEffect, useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { CastList } from "./Credits";
import { VideoList } from "./VideoList";
import { Similar } from "./Similar";
import './detail.scss'


function Detail(props) {
  const [item, setItem] = useState([])
  const [genres, setGenres] = useState([])
  const param = useParams()
  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${param.category}/${param.id}?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data)
        setGenres(data.genres)
      }
      )
      .catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div
        className="detail__banner"
        style={{ backgroundImage: `url(${background})` }}
      >
      </div>
      <div className="detail__content">
        <div className="poster"><img src={apiConfig.w500Image(item.poster_path)} alt="" /></div>
        <div className="content">
          <h1 className="name">{param.category == 'movie' ? item.title : item.name}</h1>
          <h1 className="original_name">{param.category == 'movie' ? item.title == item.original_title ? null : item.original_title : item.name == item.original_name ? null : item.original_name}</h1>
          <div className="list_genres">
            {genres.map((item) =>
              <p className="genres">{item.name}</p>
            )}
          </div>
          <p className="overview"> <span>Overview</span> <br /> {item.overview}</p>
          <CastList></CastList>
        </div>
      </div>
      <div className="container">
        <VideoList></VideoList>
        <Similar></Similar>
      </div>

    </>
  );
}

export default Detail;
