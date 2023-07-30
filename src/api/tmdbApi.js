import axiosClient from "./axiosClient"

export const category = {
      movie: 'movie',
      tv: 'tv'
}

export const movieType = {
      nowplaying: "now_playing",
      popular: 'popular',
      top_rated: 'top_rated',
      upcoming: 'upcoming',
      trending: 'trending'
}

export const tvType = {
      airing_today: 'airing_today',
      on_the_air: 'on_the_air',
      popular: 'popular',
      top_rated: 'top_rated',
      trending: 'trending'
}

const tmdbApi = {
      getMovieList: (type,params)=>{
            const url = 'movie/' + movieType[type]
            return axiosClient.get(url,params)
      },
      getTvList: (type,params)=>{
            const url = 'tv/' + tvType[type]
            return axiosClient.get(url,params)
      },
      getVideo: (cate,id)=>{
            const url = category[cate]+'/'+id+'/videos'
            return axiosClient.get(url,{params: {}})
      },
      search: (cate,params)=>{
            const url = 'search/'+ category[cate]
            return axiosClient.get(url,params)
      },
      detail: (cate,id)=>{
            const url = category[cate] + '/' +id
            return axiosClient.get(url,{params: {}})
      },
      credit: (cate,id)=>{
            const url = category[cate] + '/' +id +'/credits'
            return axiosClient.get(url,{params: {}})
      },
      similar: (cate,id)=>{
            const url = category[cate] + '/' +id +'/similar'
            return axiosClient.get(url,{params: {}})
      },
}

export default tmdbApi;