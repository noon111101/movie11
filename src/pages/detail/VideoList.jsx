import { useEffect, useState } from "react"
import apiConfig from "../../api/apiConfig"
import { useParams } from "react-router-dom"
import { useRef } from "react"

export function VideoList() {
      const [videos, setVideos] = useState([])
      const param = useParams()
      useEffect(() => {

            fetch(`https://api.themoviedb.org/3/${param.category}/${param.id}/videos?api_key=53b7cf8ecf94d39f8a8c690c4e62b2fc`)
                  .then((res) => res.json())
                  .then((data) =>
                        setVideos(data.results)
                  )
                  .catch((err) => console.log(err))
      }, [])

      return (
            <div className="video_list ">
                  {
                        videos.map((item) =>
                              item.type == "Trailer" ?
                                    <>
                                          <h3>{item.name}</h3>
                                          <iframe width='1000px' height="600px"  src={`https://www.youtube.com/embed/${item.key}`}></iframe>
                                    </> : null
                        )
                  }

            </div>
      )
}

{/* <iframe width='500px' height='300px' src={`https://www.youtube.com/embed/${item.key}`}></iframe> */ }